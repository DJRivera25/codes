// Load environment variables from .env file (like CLIENT_ID and CLIENT_SECRET)
require("dotenv").config();

// Import Passport for authentication
const passport = require("passport");

// Import the Google OAuth 2.0 strategy for Passport
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Configure Passport to use the Google strategy
passport.use(
  new GoogleStrategy(
    {
      // Google OAuth Client ID (from Google Cloud Console)
      clientID: process.env.CLIENT_ID,

      // Google OAuth Client Secret
      clientSecret: process.env.CLIENT_SECRET,

      // The URL Google will redirect to after user grants permission
      callbackURL: "http://localhost:3000/users/google/callback",

      // Allows us to pass the original request to the callback (optional)
      passReqToCallback: true,
    },

    // This function runs after Google authenticates the user
    // It receives the access token, refresh token, and user profile
    function (request, accessToken, refreshToken, profile, done) {
      // `done(null, profile)` tells Passport authentication succeeded
      // and passes the Google profile to be attached to req.user
      return done(null, profile);
    }
  )
);

// Tells Passport how to store user data in the session (usually just the user ID)
// This is called after `done(null, user)` in the GoogleStrategy callback
passport.serializeUser(function (user, done) {
  // In a real app, you'd typically store user.id instead of the whole user object
  done(null, user);
});

// Tells Passport how to retrieve full user info from what's stored in the session
// Runs on every request that needs user data (e.g., checking if user is logged in)
passport.deserializeUser(function (user, done) {
  // Here we're simply passing the user object as-is
  // In a real app, you might query the database to get full user info
  done(null, user);
});
