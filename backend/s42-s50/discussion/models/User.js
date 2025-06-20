const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, `First name is Required`],
    },
    lastName: {
      type: String,
      required: [true, `Last name is required`],
    },
    email: {
      type: String,
      required: [true, `Email field is required`],
      unique: true,
    },
    mobileNo: {
      type: String,
      required: [true, `Contact number is required`],
    },
    password: {
      type: String,
      required: [true, `Provide Password`],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    verificationTokenExpiration: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
