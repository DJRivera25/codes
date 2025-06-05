const mongoose = require("mongoose");
const Course = require("./Course"); // import Course model for price lookup

const enrollmentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, `User ID is required`],
    ref: "User",
  },
  enrolledCourses: [
    {
      courseId: {
        type: String,
        required: [true, `Course ID is required`],
        ref: "Course",
      },
      status: {
        type: String,
        default: `Enrolled`,
      },
    },
  ],
  totalPrice: {
    type: Number,
  },
  enrolledOn: {
    type: Date,
    default: Date.now,
  },
});

// Add pre-save middleware to calculate totalPrice dynamically
enrollmentSchema.pre("save", function (next) {
  const enrollment = this;
  console.log(`enrollment = this in enrollment model`, enrollment);
  const courseIds = enrollment.enrolledCourses.map((c) => c.courseId);

  Course.find({ _id: { $in: courseIds } })
    .select("price")
    .then((courses) => {
      enrollment.totalPrice = courses.reduce((sum, course) => sum + course.price, 0);
      next();
    })
    .catch((err) => next(err));
});

module.exports = mongoose.model("Enrollment", enrollmentSchema);
