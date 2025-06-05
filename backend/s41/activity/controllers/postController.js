const Post = require("../models/post.js");

module.exports.createPost = (reqBody) => {
    return Post.findOne({title : reqBody.title}).then((result) => {
		if(result){
			return "Duplicate Post Found!";
		} else {
			let newPost = new Post({
				title : reqBody.title,
                content: reqBody.content
			});

			return newPost.save()
            .then((savedPost) => "New Post Created")
            .catch(err => err)
		}

	}).catch(err => res.send(err))
}


module.exports.getAllPosts= () => {
    return Post.find({})
	.then((result) => result)
	.catch((err) => err)
}

module.exports.updatePost = (postId, newContent) => {
    return Post.findById(postId).then(result => {
      if (!result) {
        return "Post not found";
      } 
      
      if(newContent.title){
        result.title = newContent.title
      }

      if(newContent.content){
        result.content = newContent.content
      }

      return result.save()
        .then(updatedPost => updatedPost)
        .catch(err => "Update failed");
    }).catch(err => "Find Failed");
  }

  module.exports.deletePost = (postId) => {
    return Post.findByIdAndDelete(postId)
	.then(removedTask => removedTask)
	.catch(err => "delete failed")
  }  