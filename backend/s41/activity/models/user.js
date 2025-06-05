const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
	firstName : String,
    lastName: String,
    email: String,
    isAdmin: Boolean,
    password: String
})

module.exports = mongoose.model("User", userSchema); 