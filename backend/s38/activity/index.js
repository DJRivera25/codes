const http = require("http"); // ← You forgot to require http
const { uptime } = require("process");

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

const app = http.createServer(function (request, response){
    if (request.url == "/" && request.method === 'GET'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(`Welcome ${userProfile.username}: Use /profile to view your profile or /courses to see  available courses.`);
    }
    else if (request.url == "/profile" && request.method === 'GET'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(`Hi ${userProfile.username}: Here's your profile information:\n`);
        response.end(
            `Username: ${userProfile.username}\n`+
            `Email: ${userProfile.email}\n`+
            `Role: ${userProfile.role}\n`
            );
    }
    else if (request.url == "/updateProfile" && request.method === 'PATCH'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        userProfile.username = "DJoe09";
        userProfile.role="Admin";
        response.write(`Profile has been updated successfully to:\n`);
        response.end(
            `Username: ${userProfile.username}\n`+
            `Email: ${userProfile.email}\n`+
            `Role: ${userProfile.role}\n`
            );
       
    }
    else if (request.url == "/courses" && request.method === 'GET'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(`Available Courses:\n`);
        for (i=0; i<courses.length; i++){
            response.write(`- ${courses[i].title} by ${courses[i].instructor} (ID: ${courses[i].id})\n`)
        };
        response.end();
    }
    else if (request.url == "/addCourse" && request.method === 'POST'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        courses.push({id: 4, title: 'Introduction to Express JS', instructor: 'Sarah Doe'});
        response.write(`New course: "${courses[courses.length-1].title}" with ${courses[courses.length-1].instructor} as instructor has been added successfully.`);
        response.end();
    }
    else if (request.url == "/updateCourse" && request.method === 'PUT'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
            let index = courses.findIndex(course => course.id === 1);
            courses[index].title = "Introduction to ExpressJS";
            courses[index].instructor = "Abby Cameron",    
            response.write(`Course ID: ${courses[index].id} has been updated successfully to:\n`);
              response.end(
            `Title: ${courses[index].title}\n`+
            `Instructor: ${courses[index].instructor}`
              );
            } 
     else if (request.url == "/updateCourse" && request.method === 'PUT'){
        response.writeHead(200, {'Content-Type': 'text/plain'});
            let index = courses.findIndex(course => course.id === 1);
            courses[index].title = "Introduction to ExpressJS";
            courses[index].instructor = "Abby Cameron",    
            response.write(`Course ID: ${courses[index].id} has been updated successfully to:\n`);
              response.end(
            `Title: ${courses[index].title}\n`+
            `Instructor: ${courses[index].instructor}`
              );
            }
            else if (request.url == "/deleteCourse" && request.method === 'DELETE'){
                response.writeHead(200, {'Content-Type': 'text/plain'});
                    let index = courses.findIndex(course => course.id === 1);
                    if (index == -1){
                        response.end(`Error: Course Not Found`);
                    } else {
                        response.write(`Course ID: ${courses[index].id} titled "${courses[index].title}"has been deleted successfully\n`);
                        courses.splice(index, 1);
                        
                    }
                    response.end();
                    }
    }
  
);

// Do not modify
// Make sure to save the server in variable called app
if(require.main === module){
    app.listen(4000, () => console.log(`Server running at port 4000`));
}

module.exports = app;
