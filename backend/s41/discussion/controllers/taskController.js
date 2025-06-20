// Import the Task model to access database functions
const Task = require("../models/taskmodel.js");

// Fetch all tasks from the database
module.exports.getAllTasks = () => {
    return Task.find({})
        .then(result => result)  // Return the list of tasks
        .catch(err => err);      // Handle error if needed
};

// Create a new task using data passed from the request
module.exports.createTask = (reqBody) => {
    // Optional: you could check if the task already exists here
    // Task.findOne({name: reqBody.name}); ← not used in current logic

    let newTask = new Task({
        name: reqBody.name,
        status: reqBody.status
    });

    return newTask.save()
        .then(task => task)       // Return saved task
        .catch(error => false);   // Return false if error occurred
};

// Delete a task by its ID
module.exports.deleteTask = (taskId) => {
    return Task.findByIdAndDelete(taskId)
        .then(removedTask => removedTask)  // Return the deleted task
        .catch(error => false);            // Return false if error
};

// Update a task's name and status
module.exports.updateTask = (taskId, newContent) => {
    return Task.findById(taskId)
        .then(result => {
            // Update values
            result.name = newContent.name;
            result.status = newContent.status;

            // Save changes to DB
            return result.save()
                .then(task => task)
                .catch(error => false);
        })
        .catch(error => false); // Handle case where ID is invalid or not found
};
