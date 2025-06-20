const mongoose = require('mongoose');

// Define the schema for a Task
const taskSchema = new mongoose.Schema({
    name: String,  // Task name (e.g., "Playing Dota")
    status: {
        type: String,
        default: "pending"  // Default status   if not provided
    }
});

// Export the model so it can be used in the controller
// This maps to the "tasks" collection in MongoDB
module.exports = mongoose.model("Task", taskSchema);
