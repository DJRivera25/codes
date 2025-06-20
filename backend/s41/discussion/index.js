// 📦 Load dependencies
const express = require("express");        // Import Express framework
const mongoose = require("mongoose");      // Import Mongoose for MongoDB
const taskRoute = require("./routes/taskroutes.js"); // Import task routes

// 🚀 Initialize Express app and server port
const app = express();
const port = 4000;

// 🛠️ Middleware to parse incoming JSON data in request bodies
app.use(express.json());

// 🌐 Connect to MongoDB Atlas using connection string
mongoose.connect("mongodb+srv://djrrivera25:admin1234@mydatabase.eo0lxsx.mongodb.net/taskDB");

// 📡 Database connection feedback
let db = mongoose.connection;

// If there's a connection error, log it
db.on("error", console.error.bind(console, "connection error"));

// Once connection is successful, log a success message
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

// 🔗 Use the /tasks route group for handling all task-related endpoints
app.use("/tasks", taskRoute);

// 🖥️ Start the server only if this file is the main entry point
if (require.main === module) {
	app.listen(port, () => console.log(`Server running at port ${port}`));
}

// 📦 Export app and mongoose for testing or external use
module.exports = { app, mongoose };
