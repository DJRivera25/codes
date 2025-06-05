const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({ 
	title : String,
    content: String,
    dateAdded: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("Post", postSchema); 

