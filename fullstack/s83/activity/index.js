// ======= IMPORTS ======= //
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// ======= CONFIG ======= //
dotenv.config();
const app = express();
app.use(express.json());

// ======= CORS OPTIONS ======= //
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// ======= ROUTES ======= //
const userRoute = require("./routes/users.js");
const workOutRoute = require("./routes/workOuts.js");

// ======= ROUTE MIDDLEWARES ======= //
app.use("/users", userRoute);
app.use("/workouts", workOutRoute);

// ======= START SERVER FUNCTION ======= //
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_STRING);
    console.log(`Connected to MongoDB Atlas successfully!`);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

// ======= CONDITIONAL START ======= //
if (require.main === module) {
  startServer();
}

// ======= EXPORTS (Optional) ======= //
module.exports = { app, mongoose, startServer };
