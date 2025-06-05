// ======================= [SECTION] Dependencies and Modules =======================
const bcrypt = require("bcrypt"); // For secure password hashing
const User = require("../models/User.js"); // Mongoose User model
const auth = require("../auth.js"); // For JWT generation and middleware
const { errorHandler } = require("../auth.js"); // Centralized error handler
const { sendVerificationEmail } = require("../emailVerification.js");
const crypto = require("crypto");

// ======================= [SECTION] Register User =======================
// Handles new user registration with validation and password hashing
module.exports.registerUser = (req, res) => {
  // Basic validations before querying DB
  if (!req.body.email.includes("@")) {
    return res.status(400).send({ message: `Invalid email Format` });
  } else if (req.body.password.length < 8) {
    return res.status(400).send({ message: `password must be atleast 8 characters long` });
  } else if (req.body.mobileNo.length !== 11) {
    return res.status(400).send({ message: `mobile number is invalid` });
  } else {
    // Check if email already exists
    User.findOne({ email: req.body.email })
      .then((result) => {
        if (result) {
          return res.status(409).send({ message: "Duplicate email found" });
        } else {
          // Proceed if all fields are filled
          if (req.body.firstName && req.body.lastName && req.body.email && req.body.password && req.body.mobileNo) {
            // Create new user instance and hash the password
            const token = crypto.randomBytes(32).toString("hex");
            const expires = Date.now() + 600 * 1000;
            const newUser = new User({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
              mobileNo: req.body.mobileNo,
              verificationToken: token,
              verificationTokenExpiration: new Date(expires),
            });

            // Save user to DB

            return newUser
              .save()
              .then((savedUser) => {
                // Send email (not async, so no .then or .catch here)
                sendVerificationEmail(savedUser.email, savedUser.verificationToken);
                return res.status(200).send({
                  message: `User Registered Successfully. Please check your email to verify your account.`,
                });
              })
              .catch((error) => errorHandler(error, req, res));
          } else {
            return res.status(400).send("All fields must be provided");
          }
        }
      })
      .catch((error) => errorHandler(error, req, res));
  }
};

// ======================= [SECTION] Login User =======================
// Authenticates user and returns a JWT access token
module.exports.loginUser = (req, res) => {
  if (req.body.email.includes("@")) {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: "No Email Found" });
        } else {
          if (user.isVerified) {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
            if (isPasswordCorrect) {
              return res.json({
                message: `User ${user.firstName} Logged in Successfully`,
                access: auth.createAccessToken(user),
              });
            } else {
              return res.status(401).send({ message: `Incorrect email or password` });
            }
          } else {
            return res.status(403).send({
              message: `verify email first`,
            });
          }
        }
      })
      .catch((error) => errorHandler(error, req, res));
  } else {
    return res.status(400).send({ message: "Invalid Email Format" });
  }
};

// ======================= [SECTION] Get User Profile =======================
// Retrieves profile of currently authenticated user
module.exports.getProfile = (req, res) => {
  User.find({ _id: req.user.id })
    .select("-password") // Exclude password from the response
    .then((user) => {
      if (user.length === 0) {
        return res.status(404).send({ message: "User not Found" });
      } else {
        res.status(200).send(user);
      }
    })
    .catch((error) => errorHandler(error, req, res));
};

// ======================= [SECTION] Remove User =======================
// Admin-only: Deletes user by ID, disallowing self-deletion
module.exports.removeUser = (req, res) => {
  const userId = req.params.id;
  if (userId === req.user.id) {
    return res.status(403).send("Cannot perform action on self");
  }

  User.findByIdAndDelete(userId)
    .then((user) => {
      if (!user) {
        return res.status(400).send(`User with ID: ${userId} not found`);
      }
      return res.send(`This User was successfully removed\n` + user);
    })
    .catch((error) => errorHandler(error, req, res));
};

// ======================= [SECTION] Update User =======================
// Updates any fields of a user document by ID
module.exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const newDetail = req.body;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send("User Not Found!");
      }

      let updatedFields = [];
      // Dynamically update only valid fields
      Object.entries(newDetail).forEach(([field, value]) => {
        if (value !== undefined && value !== null && field in user) {
          user[field] = value;
          updatedFields.push(`${field}: was updated to ${value}`);
        }
      });

      user
        .save()
        .then(() => res.send(updatedFields.join(", ")))
        .catch((error) => errorHandler(error, req, res));
    })
    .catch((error) => errorHandler(error, req, res));
};

// ======================= [SECTION] Search Users (Admin Use) =======================
// Admin: Search users based on dynamic fields (firstName, lastName, etc.)
module.exports.searchUser = (req, res) => {
  let query = {};

  if (req.body.id) query._id = req.body.id;
  if (req.body.firstName) query.firstName = { $regex: req.body.firstName, $options: "i" };
  if (req.body.lastName) query.lastName = { $regex: req.body.lastName, $options: "i" };
  if (req.body.email) query.email = { $regex: req.body.email, $options: "i" };
  if (req.body.mobileNo) query.mobileNo = req.body.mobileNo;

  console.log(query);
  User.find(query)
    .select("-password")
    .then((result) => {
      if (result.length > 0) {
        res.send(result);
      } else {
        res.status(404).send(`No users match the search`);
      }
    })
    .catch((error) => errorHandler(error, req, res));
};

module.exports.verifyEmail = (req, res) => {
  const token = req.query.token;
  if (!token) {
    return res.status(400).send({
      message: `Verification Token is missing`,
    });
  } else {
    User.findOneAndUpdate(
      {
        verificationToken: token,
        verificationTokenExpiration: { $gt: new Date() },
      },
      {
        $set: { isVerified: true },
        $unset: { verificationToken: "", verificationTokenExpiration: "" },
      }
    )
      .then((verifiedUser) => {
        if (verifiedUser) {
          verifiedUser
            .save()
            .then(() => {
              return res.status(200).send("Email verified successfully. you can now log in");
            })
            .catch((error) => errorHandler(error, req, res));
        }
      })
      .catch((error) => errorHandler(error, req, res));
  }
};

// Function to reset the password
module.exports.resetPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;

    //array destructuring to access the id field in req.user object/token
    const { id } = req.user; // Extracting user ID from the authorization header

    // Hashing the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Updating the user's password in the database
    await User.findByIdAndUpdate(id, { password: hashedPassword });

    // Sending a success response
    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }

  /*   Functions like fetch(), axios(), mongoose queries, bcrypt, fs.promises, etc., return Promises. */
};

module.exports.updateUserRole = (req, res) => {
  let isAdminTrue = {
    isAdmin: true,
  };

  const id = req.params.id;
  User.findByIdAndUpdate(id, isAdminTrue).then((updatedUser) => {
    if (updatedUser) {
      if (updatedUser.isAdmin === true) {
        return res.status(200).send(`User NAME: ${updatedUser.firstName} ${updatedUser.lastName} is already an admin`);
      } else {
        return res.status(200).send({
          action: `Update Successful`,
          message: `updateUser NAME: ${updatedUser.firstName} ${updatedUser.lastName} is now an admin`,
        });
      }
    }
  });
};
