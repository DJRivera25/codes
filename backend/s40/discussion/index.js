const express = require("express");
const mongoose = require("mongoose");
const taskRoute = require("./routes/taskroutes.js")
const app = express();
const port = 4000;




// Connecting to MongoDB
					// connection string
mongoose.connect("mongodb+srv://djrrivera25:admin1234@wdc028-course-booking.xw36oan.mongodb.net/taskDB");
// Connection to the database
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", ()=> console.log("We're connected to the cloud database"));


// [Section] Mongoose Schemas
const taskSchema = new mongoose.Schema({
	name: String,
	status: {
		type: String,
		default: "pending"
	}
})

//USER SCHEMA
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})


//USER MODEL
const User = mongoose.model("User", userSchema);

// model
// we have to create a model to use the CRUD methods
const Task = mongoose.model("Task", taskSchema);

// Setup for allowing to handle data from requests
// Allows our server application to read json data
app.use(express.json());

// Add task feature
app.post("/tasks", (req, res) => {
	// to find in the database using the provided name field in the request body
	Task.findOne({name: req.body.name}).then((result, err)=>{
		console.log(req.body.name);
		// if result of finding a document is not null (meaning there is a document found) and that document matches the task that we are going to add, the program will give a response "Duplicate task found"
		if(result != null && result.name === req.body.name){
			return res.send("Duplicate task found");
		}
		// or else, the program will create a task object, and will save it to the database using .save(), upon succesful saving the object to the database, it will have a response "New Task Created"
		else{
			let newTask = new Task({
				name: req.body.name
			})
			// .save() - saves an object to document in the databse
			newTask.save().then((savedTask, saveErr) => {
				if(saveErr){
					return console.error(saveErr);
					// return res.send(saveErr);
				}
				else{
					console.log(savedTask);
					return res.send("New Task Created");		
				}
			})	
		}
	})
})

// Break: Be back at 3:15pm

//[SECTION ACTIVITY]
app.get("/tasks", (req, res)=>{
    Task.find({}).then((result, err) => {
        if (err){
            return console.error(err);            
        } else {
            console.log(result)
            return res.send(result);
        }
    })
})

app.post("/search-task", (req, res)=> {
    Task.findOne({name: req.body.name}).then((result, err)=>{
        if(!req.body.name){
            return res.send("Task name required");
        }
        if(err){
            return console.error(err);
        } else {
            console.log(result);
            return res.send(result);
        }

    })
})

//USER FEATURE

app.post("/register", (req, res) => {
    User.findOne({ email: req.body.email }).then((result, err) => {
        if (!(req.body.firstName && req.body.lastName && req.body.password && req.body.email)) {
            console.log(result)
            return res.send(`All Fields must be Provided`);
        } else if (result != null && result.email === req.body.email) {
            console.log(err);
            return res.send(`Duplicate Email Found`);
        } else {
            let newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            });
            newUser.save().then((savedUser, saveErr) => {
                if (saveErr) {
                    return console.error(saveErr);
                } else {
                    return res.send(`New user registered`);
                }
            });
           
        }
    });
});

app.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }).then((result, err) => {
        if (!result) {
            console.log(err);
            return res.send(`Email does not exist!`);
        } else {
            if (result.password === req.body.password) {
                return res.send(`Thank you for logging in`);
            } else {
                return res.send(`Wrong Password!`);
            }
        }
    });
});

if(require.main === module){
	app.listen(port, ()=> console.log(`Server running at port ${port}`));
}

module.exports = {app, mongoose}
