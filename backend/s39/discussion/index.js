// Use the "require" directive to load/import the express module/package
const express = require("express");

// Create an application using express
// This creates an express application and stores this in a constant variable called app
// In layman's terms, app is our server
const app = express();

// For our application sever to run, we need a port to listen
const port = 4000;

// Setup for allowing the server to handle data from request
// allows your app to read json data
app.use(express.json());

// allows your app to read data from forms
// By applying the option of "extended:true" this allows us to receive information in other data types such as an object which we will use throughout our application
app.use(express.urlencoded({extended:true}));

// [SECTION] Routes
// Express has methods corresponding to each HTTP method
app.get("/", (req, res) => {
	// res.send uses the express JS package's method instead to send a response back to the client
	res.send("Hello World!");
});

// This route expects to receive a GET request at the URI '/hello'
app.get("/hello", (req, res) => {
	// req.body contains the contents/data of the request body
	// All the properties defined in our postman request will be accessble here as properties with the same names
	res.send(`Hello there ${req.body.firstName} ${req.body.lastName}!`);
});

// An array that will store user object when the "/register" route is accessed
// This will serve as our mock database
let users = [];

// This route expects to receive a POST request at the URI "/register"
// This will create a user object in the "users" variable that mirrors a real world registration process
app.post("/register", (req, res) => {

    console.log(req.body);

    // If contents of the "request body" with the property "username" and "password" is not empty
    if(req.body.username !== '' && req.body.password !== ''){

        // This will store the user object sent via Postman to the users array created above
        users.push(req.body);
        console.log(users);
        // This will send a response back to the client/Postman after the request has been processed
        res.send(`User ${req.body.username} successfully registered!`);

    // If the username and password are not complete an error message will be sent back to the client/Postman
    } else {

        res.send("Please input BOTH username and password.");

    }

})


//[SECTION ACTIVITY]

app.get('/users', (req,res) => {
    res.send(users);
})

app.put("/change-password", (req, res) => {
    let message = "";
    for (i=0; i<users.length; i++){
        if (users[i].username == req.body.username) {
             users[i].password = req.body.password;
             message = `User ${req.body.username}'s password has been updated.`;
             res.send(message);
        } 
    }
        message = `User does not exist`;
        res.send(message);

})

app.post('/find-user', (req, res) => {
      if(!req.body.username){
            return res.status(400).send(`Username is required in the request body`) 
      }
      const user = users.find(user => user.username === req.body.username)
      if (user){
        res.send(user);
      } else {
        return res.status(404).send(`User with username "${req.body.username}" not found.`)
        }   
        
  /* } */  })

app.delete('/delete-user',(req,res) => {
     if(users.length === 0){
        return res.send(`Users collection is empty`);
     } else {
        const removedUser = users[users.length-1].username;
        users.splice((users.length-1),1);
        res.send(`User ${removedUser} has been removed. \n remaining users:\n ${JSON.stringify(users, null, 2)}`)
     }
})









// Tells our server to listen to the port
// An if statement is added to ensure that the server starts only when this file is executed directly
// This prevents the server from starting when the module/package is imported by other files, allowing for testing and reusability
if(require.main === module){
	app.listen(port, () => console.log(`Server running at port ${port}`));
}

// export app for checking
module.exports = { app };