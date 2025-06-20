const express = require("express");
const mongoose = require("mongoose");
const postRoute = require("./routes/postRoutes.js"); 
const userRoute = require("./routes/userRoutes.js");

const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://djrrivera25:admin1234@mydatabase.eo0lxsx.mongodb.net/postDB");	


let db = mongoose.connection; 
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("We're connected to the cloud database"));

app.use(express.json());
app.use(express.urlencoded({extended:true})); 

app.use("/posts", postRoute);
app.use("/users", userRoute);

/* app.post("/posts/", (req, res)=> {

	Post.findOne({name : req.body.name}).then((result) => {

		if(result != null && result.name == req.body.name){

			return res.send("Duplicate Post found");

		} else {

			let newPost = new Post({
				title : req.body.title,
                content: req.body.content
			});

			newPost.save()
            .then((savedPost) => res.send("New Post created"))
            .catch(err => res.send(err))
		}

	}).catch(err => res.send(err))
}) */

/* app.get("/posts/", (req, res) => {

	// "find" is a Mongoose method that is similar to Mongodb "find", and an empty "{}" means it returns all the documents and stores them in the "result" parameter of the callback function
	Post.find({})
	.then((result) => res.send(result))
	.catch((err) => res.send(err))

})
 */

/* app.put("/posts/:id", (req, res) => {

	 Task.findById(req.params.id).then(result => {

		result.name = newContent.name;

		return result.save()
		.then((updatedTask) => res.send(updatedTask))
		.catch(err => res.send("Update failed"))

	//Catch the error and send a message to the client.	
	}).catch(err => res.send("Find Failed"))

}) */

/* app.delete("/posts/:id", (req, res) => {

	Task.findByIdAndRemove(req.params.id)
	.then(result => res.send(updatedTask))
	.catch(err => res.send("delete failed"))

}) */


/* app.post("/users/register", (req, res)=> {

	// Finds for a document with the matching username provided in the client/Postman
	User.findOne({ email : req.body.email }).then((result) => {

		// Check for duplicates
		if(result != null && result.email == req.body.email){

			return res.send("Duplicate email found");

		} else {

			// If the username and password are both not blank
			if(req.body.firstName !== '' && req.body.lastName !== '' && req.body.email !== '' && req.body.password !== ''){

				// Create/instantiate a "newUser" from the "User" model
                let newUser = new User({
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					email: req.body.email,
                    password : req.body.password
                });
    
    			// Create a document in the database
                newUser.save()
				.then((savedPost) =>res.send("New user registered"))
				.catch((err) => res.send(err))

            // If at least one of the fields are left blank
            } else {

            	/// Send a response back to the client/Postman of "created"
                return res.send("All fields must be provided");
            }			
		}
	})
	.catch((err) => res.send(err))
}) */

/* app.post("/users/login", (req, res)=> {

	User.findOne({ email : req.body.email }).then((result) => {

		// Check if email exists in the database.
		if(result != null && result.email == req.body.email){

			//if it is check password from db and req.body match
			if(result.password === req.body.password){
				return res.send("Thank you for logging in!")
			} else {
				//else, send a message to the client.
				return res.send("Wrong Password")
			}

		// If email does not exist in the database
		} else {
			return res.send("Email does not exist");			
		}
	})
	.catch(err => res.send(err))

})  */

// Listen to the port, meaning, if the port is accessed, we run the server

//An if statement is added here to be able to export the following app/server for checking.
if(require.main === module){
	app.listen(port, () => console.log(`Server running at port ${port}`));
}

module.exports = { app, mongoose };
 
