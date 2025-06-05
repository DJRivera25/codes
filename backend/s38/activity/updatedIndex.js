const express = require("express"); // Import the Express framework
const app = express(); // Create an instance of the Express application

// Dummy data for courses (acts like a temporary in-memory database)
let courses = [
    { id: 1, title: "Node.js Basics", instructor: "Jane Smith" },
    { id: 2, title: "Advanced JavaScript", instructor: "John Doe" },
    { id: 3, title: "Web Development 101", instructor: "Alice Johnson" }
];

// Dummy user profile object
let userProfile = {
    username: "Jd0901",
    email: "john.doe@example.com",
    role: "Student"
};

// Route: GET /
// Description: Show a welcome message and guide user to other endpoints
app.get("/", (req, res) => {
    res.send(`Welcome ${userProfile.username}: Use /profile to view your profile or /courses to see available courses.`);
});

// Route: GET /profile
// Description: Display user profile information
app.get("/profile", (req, res) => {
    res.send(
        `Hi ${userProfile.username}: Here's your profile information:\n` +
        `Username: ${userProfile.username}\n` +
        `Email: ${userProfile.email}\n` +
        `Role: ${userProfile.role}\n`
    );
});

// Route: PATCH /updateProfile
// Description: Simulates updating specific fields of the user profile
app.patch("/updateProfile", (req, res) => {
    userProfile.username = "DJoe09"; // Change username
    userProfile.role = "Admin";      // Change role
    res.send(
        `Profile has been updated successfully to:\n` +
        `Username: ${userProfile.username}\n` +
        `Email: ${userProfile.email}\n` +
        `Role: ${userProfile.role}\n`
    );
});

// Route: GET /courses
// Description: List all available courses
app.get("/courses", (req, res) => {
    let courseList = "Available Courses:\n";
    courses.forEach(course => {
        courseList += `- ${course.title} by ${course.instructor} (ID: ${course.id})\n`;
    });
    res.send(courseList);
});

// Route: POST /addCourse
// Description: Simulate adding a new course to the course list
app.post("/addCourse", (req, res) => {
    courses.push({ id: 4, title: "Introduction to Express JS", instructor: "Sarah Doe" });
    res.send(`New course: "${courses[courses.length - 1].title}" with ${courses[courses.length - 1].instructor} as instructor has been added successfully.`);
});

// Route: PUT /updateCourse
// Description: Replace all information of a specific course (ID: 1 in this case)
app.put("/updateCourse", (req, res) => {
    const index = courses.findIndex(course => course.id === 1); // Find course by ID
    if (index !== -1) {
        // Update full course details
        courses[index].title = "Introduction to ExpressJS";
        courses[index].instructor = "Abby Cameron";
        res.send(
            `Course ID: ${courses[index].id} has been updated successfully to:\n` +
            `Title: ${courses[index].title}\n` +
            `Instructor: ${courses[index].instructor}`
        );
    } else {
        // Course not found
        res.status(404).send("Course not found.");
    }
});

// Start the Express server on port 4000
app.listen(4000, () => console.log("Server running at port 4000"));

// Export the app for use in other modules (e.g., testing)
module.exports = app;
