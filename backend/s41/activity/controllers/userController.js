const User = require("../models/user.js");

module.exports.registerUser = (reqBody) => {
    // Finds for a document with the matching username provided in the client/Postman
	return User.findOne({ email : reqBody.email }).then((result) => {

		// Check for duplicates
		if(result){

			return "Duplicate email found"

		} else {

			// If the username and password are both not blank
			if(reqBody.firstName && reqBody.lastName && reqBody.email && reqBody.password ){

				// Create/instantiate a "newUser" from the "User" model
                let newUser = new User({
					firstName: reqBody.firstName,
					lastName: reqBody.lastName,
					email: reqBody.email,
                    password : reqBody.password
                });
                console.log("Saving new user:", newUser);
    			// Create a document in the database
                return newUser.save()
				.then(savedPost => "New user registered")
				.catch(err => err)

            // If at least one of the fields are left blank
            } else {

            	/// Send a response back to the client/Postman of "created"
                return "All fields must be provided";
            }			
		}
	}).catch((err) => (err))
}


module.exports.loginUser = (reqBody) => {
    return User.findOne({ email : reqBody.email }).then((result) => {

		// Check if email exists in the database.
		if(result){

			//if it is check password from db and req.body match
			if(result.password === reqBody.password){
				return "Thank you for logging in!";
			} else {
				//else, send a message to the client.
				return "Wrong Password";
			}

		// If email does not exist in the database
		} else {
			return "Email does not exist";			
		}
	})
	.catch(err => (err))

}

module.exports.updateUser = (userId, newDetail) => {
    return User.findById(userId).then(result => {
        if (!result) {
          return "User Not Found!";
        } 
        
        if(newDetail.email){
          result.email = newDetail.email
        }
  
        if(newDetail.password){
          result.password = newDetail.password
        }
  
        return result.save()
          .then(updatedUser => updatedUser)
          .catch(err => "Update failed");
      }).catch(err => "Find Failed");
    }
