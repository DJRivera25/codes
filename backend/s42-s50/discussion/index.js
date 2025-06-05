// ===== IMPORTING REQUIRED PACKAGES ===== //
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
require("./passport.js");
const cors = require("cors");
require("dotenv").config();

// ===== INITIALIZE EXPRESS APP ===== //
const app = express();

// ===== MIDDLEWARES ===== //
app.use(express.json());

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(
  session({
    secret: process.env.CLIENT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ===== IMPORTING ROUTES ===== //
const enrollmentRoute = require("./routes/enrollment.js");
const userRoute = require("./routes/user.js");
const courseRoute = require("./routes/course.js");

// ===== ROUTE MIDDLEWARES ===== //
app.use("/users", userRoute);
app.use("/courses", courseRoute);
app.use("/enrollments", enrollmentRoute);

// ===== MONGODB CONNECTION & SERVER START ===== //
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_STRING);

    console.log("Connected to MongoDB Atlas successfully!", mongoose.connection.name);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit the process if DB connection fails
  }
}

// Only start server if this file is run directly (not imported)
if (require.main === module) {
  startServer();
}

// ===== EXPORTS ===== //
module.exports = { app, mongoose };
