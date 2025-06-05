const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Course Name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, `Description field is required`],
  },
  price: {
    type: Number,
    required: [true, "Price field is required"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  enrollees: [
    {
      enrolledOn: {
        type: Date,
        default: Date.now,
      },
      userId: String,
    },
  ],
});

// Add virtual field 'enrolleeCount' that returns the number of enrollees
courseSchema.virtual("enrolleeCount").get(function () {
  return (this.enrollees || []).length;
});

// Ensure virtual fields are included when converting to JSON or Object
courseSchema.set("toJSON", { virtuals: false });
courseSchema.set("toObject", { virtuals: false });

module.exports = mongoose.model("Course", courseSchema);
