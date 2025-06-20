const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const { createAccessToken } = require("../auth.js");
const mongoose = require("mongoose");

// ======= Register User ======= //
const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, mobileNo, gender } = req.body;

    if (!fullName || !email || !password || !mobileNo || !gender) {
      return res.status(400).json({ error: "All fields must be provided" });
    }

    if (!email.includes("@")) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: "Password must be at least 8 characters" });
    }

    if (!/^09\d{9}$/.test(mobileNo)) {
      return res.status(400).json({ error: "Mobile number must be a valid Philippine number" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const newUser = new User({
      fullName,
      email,
      mobileNo,
      gender,
      password: bcrypt.hashSync(password, 10),
    });

    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// ======= Login User ======= //
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid Email" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "No Email Found" });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Email and password do not match" });
    }

    return res.status(200).json({
      message: "User logged in successfully",
      Token: createAccessToken(user),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

// ======= Get User Details ======= //
const getDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// ======= Exports ======= //
module.exports = {
  registerUser,
  loginUser,
  getDetails,
};
