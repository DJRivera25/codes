const express = require("express"); // Import the Express framework
const mongoose = require("mongoose"); // Import Mongoose library to interact with MongoDB using object models
const app = express(); // Create an instance of the Express application. app is our server
const port = 4000;

//note when creating schema >> model >> express.json >> feature

// You need to insert your MongoDB connection string inside the quotes, like: "mongodb+srv://username:password@cluster.mongodb.net/dbname"
mongoose.connect("mongodb+srv://djrrivera25:admin1234@wdc028-course-booking.xw36oan.mongodb.net/taskDB");
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open",() => console.log(`We're connected to the cloud database`));

// [SECTION] Mongoose Schemas
const taskSchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        default: "pending"
    }
})

const hobbySchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        default: "pending"
    }
})


/* Here, Mongoose creates a model called "Task".
- Mongoose pluralizes the model name (Task) to form the collection name in lowercase: "tasks".
- This means the collection named "tasks" will be created automatically when you first save a document using this model.  */
const Task = mongoose.model("Task", taskSchema);
const Hobby = mongoose.model("Hobby", hobbySchema);

app.use(express.json()); //allows your app to read json data
app.use(express.urlencoded({extended: true})); // allows your app to read data from forms. "extended true" allows us to receive information in other data types such as an object which we will use throughout our application

app.post("/task", (req, res) => {
    Task.findOne({ name: req.body.name }).then((result) => {
        console.log(req.body.name);
        if (result != null && result.name === req.body.name) {
            return res.send(`Duplicate task Found!`);
        } else{
			let newTask = new Task({
				name: req.body.name
			})
			// .save() - saves an object to document in the databse <-- this triggers MongoDB to create the collection if it doesn't exists
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
    });
});

app.post("/hobby", (req, res) => {
    Hobby.findOne({ name: req.body.name }).then((result) => {
        console.log(req.body.name);
        if (result != null && result.name === req.body.name) {
            return res.send(`Duplicate Hobby Found!`);
        } else {
            let newHobby = new Hobby({  
                name: req.body.name
            });
            // .save() saves an object to document in the database
            newHobby.save();   // <-- this triggers MongoDB to create the collection if it doesn't exists
            res.send(`New hobby created`);
        }
    });
});





// Start the Express server on port 4000
app.listen(port, () => console.log(`Server running at port ${port}`));

module.exports = {app, mongoose}