//[SECTION] Dependencies and Modules
const Enrollment = require("../models/Enrollment.js"); // Mongoose model for enrollments
const Course = require("../models/Course.js"); // Course Mongoose model
const { errorHandler } = require("../auth.js"); // Custom error handler utility

//[SECTION] Enroll a user in one or more courses
module.exports.enroll = (req, res) => {
  if (req.user.isAdmin) {
    return res.status(403).send({ message: "Admin is Forbidden" });
  }

  const courseIds = req.body.enrolledCourses.map((course) => course.courseId);

  const hasDuplicate = courseIds.some((id, index) => courseIds.indexOf(id) !== index);
  if (hasDuplicate) {
    return res.status(400).send({
      message: "Check your input: Duplicate Course Found",
    });
  }

  // Step 0: Fetch all requested courses (to get their names and status)
  Course.find({ _id: { $in: courseIds } })
    .then((allRequestedCourses) => {
      // Find inactive courses by difference
      const inactiveCourses = allRequestedCourses.filter((course) => !course.isActive);

      if (inactiveCourses.length > 0) {
        const inactiveNames = inactiveCourses.map((c) => c.name).join(", ");
        return res.status(400).send({
          message: `Cannot enroll. The following courses are inactive: ${inactiveNames}`,
        });
      }

      // Proceed with enrollment if all courses are active
      return Enrollment.find({ userId: req.user.id }).then((enrollments) => {
        // Flatten all enrolled course IDs
        const alreadyEnrolledCourseIds = [];
        enrollments.forEach((enrollment) => {
          enrollment.enrolledCourses.forEach((course) => {
            alreadyEnrolledCourseIds.push(course.courseId.toString());
          });
        });

        // Check if user is already enrolled
        const alreadyEnrolled = courseIds.find((courseId) => alreadyEnrolledCourseIds.includes(courseId));

        if (alreadyEnrolled) {
          // Fetch the course name for better message
          return Course.findById(alreadyEnrolled)
            .select("name")
            .then((course) => {
              return res.status(400).send({
                message: `User is already enrolled or completed in ${course.name}`,
              });
            });
        }

        // Fetch course names for response
        return Course.find({ _id: { $in: courseIds } })
          .select("name _id")
          .then((courses) => {
            const enrolledCourseDetails = courses.map((course) => ({
              id: course._id,
              name: course.name,
            }));

            let newEnrollment = new Enrollment({
              userId: req.user.id,
              enrolledCourses: req.body.enrolledCourses,
            });

            return newEnrollment.save().then((enrollment) => {
              const updateCourses = courseIds.map((courseId) => {
                return Course.findByIdAndUpdate(courseId, {
                  $push: {
                    enrollees: {
                      enrolledOn: new Date(),
                      userId: req.user.id,
                    },
                  },
                });
              });

              return Promise.all(updateCourses).then(() => {
                return res.status(201).send({
                  message: "Enrollment Successful",
                  user: `${req.user.firstName} ${req.user.lastName} is now enrolled to:`,
                  courses: enrolledCourseDetails,
                  totalprice: newEnrollment.totalPrice,
                });
              });
            });
          });
      });
    })
    .catch((error) => errorHandler(error, req, res));
};

//[SECTION] Get all enrollments of the logged-in user
module.exports.getEnrollments = (req, res) => {
  Enrollment.find({ userId: req.user.id })
    .populate("userId", "firstName lastName") // Populate user details
    .populate("enrolledCourses.courseId", "name description") // Populate course details inside enrolledCourses
    .then((enrollments) => {
      if (enrollments.length === 0) {
        return res.status(404).send({ message: "No enrollments found" });
      }
      res.status(200).send(enrollments);
    })
    .catch((error) => errorHandler(error, req, res));
};

module.exports.updateEnrollmentStatus = (req, res) => {
  // Only allow admins to update enrollment status
  if (!req.user.isAdmin) {
    return res.status(403).send({ message: "Only admins can update enrollment status" });
  }

  // Destructure userId, courseId, and status from the request body
  const { userId, courseId, status } = req.body;

  // Validate required fields
  if (!userId || !courseId || !status) {
    return res.status(400).send({ message: "userId, courseId, and status are required" });
  }

  // Validate that status is one of the allowed values
  const validStatuses = ["Enrolled", "Completed", "Cancelled"];
  if (!validStatuses.includes(status)) {
    return res.status(400).send({ message: `Invalid status. Must be one of: ${validStatuses.join(", ")}` });
  }

  // Update the status of the specific course in the user's enrolledCourses array
  Enrollment.findOneAndUpdate(
    { userId: userId, "enrolledCourses.courseId": courseId },
    { $set: { "enrolledCourses.$.status": status } },
    { new: true } // Return the updated document
  )
    .then((updatedEnrollment) => {
      if (!updatedEnrollment) {
        return res.status(404).send({ message: "Enrollment not found for given user and course" });
      }

      if (status === "Enrolled") {
        return Course.findById(courseId).then((course) => {
          if (!course) {
            return res.status(404).send({ message: "Course not found" });
          }

          const alreadyEnrolled = course.enrollees.some((enrollee) => enrollee.userId.toString() === userId.toString());

          if (alreadyEnrolled) {
            // User is already in enrollees, no need to add again
            return res.status(400).send({
              message: `Enrollment status to course ${courseId} is already ${status}.`,
            });
          }

          // User not found, add with timestamp
          course.enrollees.push({
            userId: userId,
            enrolledOn: new Date(),
          });

          return course.save().then(() => {
            return res.status(200).send({
              message: `Enrollment status to course ${courseId} was updated to ${status} and user added to course enrollees.`,
            });
          });
        });
      }
      // If status is "Completed", remove user from course enrollees
      if (status === "Completed") {
        return Course.findByIdAndUpdate(courseId, {
          $pull: { enrollees: { userId: userId } },
        })
          .then(() => {
            return res.status(200).send({
              message: `Enrollment status to course ${courseId} was updated to ${status} and user removed from course enrollees.`,
            });
          })
          .catch((err) => res.status(500).send({ message: "Failed to update course enrollees", error: err.message }));
      }

      // If status is "Cancelled", remove course from enrolledCourses and cleanup empty enrollment docs
      if (status === "Cancelled") {
        // Step 1: Remove course from user's enrolledCourses
        return Enrollment.updateMany({ userId: userId }, { $pull: { enrolledCourses: { courseId: courseId } } })
          .then(() => {
            // Step 2: Remove user from course enrollees
            return Course.findByIdAndUpdate(courseId, {
              $pull: { enrollees: { userId: userId } },
            });
          })
          .then(() => {
            // Step 3: Delete any enrollment docs that are now empty
            return Enrollment.deleteMany({
              userId: userId,
              enrolledCourses: { $size: 0 },
            });
          })
          .then(() => {
            return res.status(200).send({
              message: `Enrollment status to course ${courseId} updated to ${status}, course removed, and empty records cleaned up.`,
            });
          })
          .catch((err) =>
            res.status(500).send({ message: "Failed to update enrollment or clean up", error: err.message })
          );
      }

      // For "Enrolled", just return success
      return res
        .status(200)
        .send({ message: `Enrollment status updated to ${status}.`, enrollment: updatedEnrollment });
    })
    .catch((error) => errorHandler(error, req, res));
};
