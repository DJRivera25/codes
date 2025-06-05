// Add solution

// Dummy data for courses
let courses = [
    { id: 1, title: "Node.js Basics", instructor: "Jane Smith" },
    { id: 2, title: "Advanced JavaScript", instructor: "John Doe" },
    { id: 3, title: "Web Development 101", instructor: "Alice Johnson" }
];

// Dummy user profile
let userProfile = {
    username: "Jd0901",
    email: "john.doe@example.com",
    role: "Student"
};


//No need to add app.listen and port number variable.

//Do not modify
//Make sure to save the server in variable called app
if(require.main === module){
    app.listen(4000, () => console.log(`Server running at port 4000`));
}

module.exports = app;