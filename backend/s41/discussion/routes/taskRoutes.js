const express = require("express");
const router = express.Router();

// Imports the controller functions (logic) for each route
const taskController = require("../controllers/taskcontroller.js");


router.get("/", (req, res) => {
    taskController.getAllTasks()
        .then(resultFromController => res.send(resultFromController));
});

// POST /tasks → Create a new task using data from request body
router.post("/", (req, res) => {
    taskController.createTask(req.body)
        .then(resultFromController => res.send(resultFromController));
});

// DELETE /tasks/:id → Delete a task by its ID
router.delete("/:id", (req, res) => {
    taskController.deleteTask(req.params.id)
        .then(resultFromController => res.send(resultFromController));
});

// PUT /tasks/:id → Update a task by its ID with new data
router.put("/:id", (req, res) => {
    taskController.updateTask(req.params.id, req.body)
        .then(resultFromController => res.send(resultFromController));
});

module.exports = router;
