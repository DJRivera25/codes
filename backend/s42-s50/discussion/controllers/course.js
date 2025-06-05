//[SECTION] Dependencies and Modules
const bcrypt = require("bcrypt"); // For password hashing (not used in this file but commonly used in authentication)
const Course = require("../models/Course.js"); // Course Mongoose model
const auth = require("../auth.js"); // Authentication middleware/utilities (not directly used here)
const { errorHandler } = require("../auth.js"); // Custom error handler for consistent error responses

//[SECTION] Get all courses (both active and inactive)
module.exports.getAllCourses = (req, res) => {
  Course.find()
    .then((courses) => {
      if (courses.length > 0) {
        // Map to plain objects, add enrolleeCount, remove enrollees array before sending
        const result = courses.map((course) => {
          const obj = course.toObject({ virtuals: true });
          delete obj.enrollees; // remove full enrollees array
          return obj;
        });
        return res.status(200).send({ courses: result });
      } else {
        return res.status(404).send({ message: `No Courses Found` });
      }
    })
    .catch((error) => errorHandler(error, req, res));
};

//[SECTION] Add a new course (prevent duplicates)
module.exports.addCourse = (req, res) => {
  // Check if a course with the same name already exists
  Course.find({ name: req.body.name }).then((course) => {
    if (course.length > 0) {
      // If course name already exists, respond with conflict status
      return res.status(409).send("Course already exist!");
    } else {
      // Create and save new course
      let newCourse = new Course({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      });

      newCourse
        .save()
        .then((result) => res.status(201).send(result)) // Send back the saved course
        .catch((error) => errorHandler(error, req, res)); // Handle any saving error
    }
  });
};

//[SECTION] Get only active courses
module.exports.getAllActive = (req, res) => {
  Course.find({ isActive: "true" }) // Query for courses marked as active
    .then((courses) => {
      if (courses.length > 0) {
        return res.status(200).send(courses);
      } else {
        return res.status(404).send({ message: `No active courses Found` });
      }
    })
    .catch((error) => errorHandler(error, req, res));
};

//[SECTION] Search course(s) dynamically by ID, name, description, or price range
module.exports.getCourse = (req, res) => {
  let query = {}; // Initialize an empty query object

  // Build query dynamically based on provided request body field
  if (req.body.id) {
    query._id = req.body.id;
  }
  if (req.body.name) {
    query.name = { $regex: req.body.name, $options: "i" }; // Partial, case-insensitive match
  }
  if (req.body.description) {
    query.description = { $regex: req.body.description, $options: "i" };
  }
  if (req.body.price) {
    query.price = req.body.price;
  }
  if (req.body.minPrice || req.body.maxPrice) {
    query.price = {};
    if (req.body.minPrice) {
      query.price.$gte = req.body.minPrice;
    }
    if (req.body.maxPrice) {
      query.price.$lte = req.body.maxPrice;
    }
  }

  console.log(query); // Log the query for debugging purposes

  Course.find(query)
    .then((courses) => {
      if (courses.length > 0) {
        // Format output when courses are found
        return res.send({
          message: `${courses.length} courses found`,
          courses: courses,
        });
      } else {
        return res.status(404).send(`No course matches the input`); // No match found
      }
    })
    .catch((error) => errorHandler(error, req, res)); // Handle any errors
};

//[SECTION] Update a course by ID
module.exports.updateCourse = (req, res) => {
  Course.findByIdAndUpdate(req.params.courseId, req.body)
    .then((course) => {
      if (course) {
        res.status(200).send({
          success: true,
          message: `Course updated successfully`,
        }); // Update successful
      } else {
        res.status(404).send({ message: `Course not Found` }); // Course not found
      }
    })
    .catch((error) => errorHandler(error, req, res)); // Error handling
};

//[SECTION] Archive a course (set isActive to false)
module.exports.archiveCourse = (req, res) => {
  let archive = { isActive: false };

  Course.findByIdAndUpdate(req.params.courseId, archive)
    .then((course) => {
      if (course) {
        if (course.isActive === false) {
          return res.status(400).send({
            message: "Course Already Archived",
            course: course,
          }); // Already archived
        } else {
          return res.status(200).send({
            success: true,
            message: `Course ${course.name} archived successfully`,
          }); // Successfully archived
        }
      } else {
        res.status(404).send({ message: `Course not Found` }); // Course not found
      }
    })
    .catch((error) => errorHandler(error, req, res)); // Handle error
};

//[SECTION] Activate a course (set isActive to true)
module.exports.activateCourse = (req, res) => {
  let activate = { isActive: true };

  Course.findByIdAndUpdate(req.params.courseId, activate)
    .then((course) => {
      if (course) {
        if (course.isActive === true) {
          return res.status(200).send({
            message: "Course Already Activated",
            course: course,
          }); // Already active
        } else {
          return res.status(200).send({
            success: true,
            message: `Course ${course.name} activated successfully`,
          }); // Successfully activated
        }
      } else {
        res.status(404).send({ message: `Course not Found` }); // Course not found
      }
    })
    .catch((error) => errorHandler(error, req, res)); // Handle error
};
