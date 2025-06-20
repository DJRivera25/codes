const express = require("express");
const router = express.Router();
const passport = require("passport");
const auth = require("../auth.js");

// Middleware functions for auth and role checks
const { verify, verifyAdmin, isLoggedIn } = require("../auth.js");

// User-related controller functions
const userController = require("../controllers/user.js");

// ==========================
// User Registration & Login
// ==========================

// Register a new user
router.post("/register", userController.registerUser);

// Login existing user
router.post("/login", userController.loginUser);

// ==========================
// User Profile & Admin Actions
// ==========================

// Get logged-in user's profile (token required)
router.get("/details", verify, userController.getProfile);

// Remove user (admin only)
router.delete("/remove_user/:id", verify, verifyAdmin, userController.removeUser);

// Update user data (admin only)
router.patch("/update_user/:id", verify, verifyAdmin, userController.updateUser);

// Search for users (admin only)
router.post("/search_user", verify, verifyAdmin, userController.searchUser);

// Verify email for account activation
router.get("/verify-email", userController.verifyEmail);

router.post("/reset-password", verify, userController.resetPassword);

router.patch("/update_user_role/:id", verify, verifyAdmin, userController.updateUserRole);
// ==========================
// Start Google OAuth login process
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"], // What we request from Google
    prompt: "select_account", // Always prompt account chooser
  })
);

// Callback route after Google login
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/users/failed", // If login fails, redirect here
  }),
  function (req, res) {
    // If login succeeds, redirect here
    res.redirect("/users/success");
  }
);

// Route hit when Google login fails
router.get("/failed", (req, res) => {
  console.log("User is not authenticated");
  res.status(401).send("Failed");
});

// Route hit when Google login succeeds
router.get("/success", isLoggedIn, (req, res) => {
  console.log("You are now Logged in!");
  console.log(req.user); // Google profile
  res.send(`Welcome ${req.user.displayName}`);
});

// Route hit when logged out
router.get("/logout", (req, res) => {
  // Destroy the session stored on the server
  req.session.destroy((err) => {
    if (err) {
      console.log("Error while destroying session:", err);
    } else {
      // Passport.js method to log out the user (removes req.user)
      req.logout(() => {
        console.log("You are logged out");
        res.redirect("/"); // Redirect to homepage (or login page)
      });
    }
  });
});

module.exports = router;
