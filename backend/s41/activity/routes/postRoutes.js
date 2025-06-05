const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController.js");

router.post("/", (req, res)=> {
    postController.createPost(req.body).then(resultFromController => res.send(resultFromController))
})


router.get("/", (req, res) => {
    postController.getAllPosts().then(resultFromController => res.send(resultFromController))
});

router.patch("/:id", (req, res) => {

    postController.updatePost(req.params.id, req.body).then(resultFromController => res.send(resultFromController));
   
})

router.delete("/:id", (req, res) => {

    postController.deletePost(req.params.id, req.body).then(resultFromController => res.send(resultFromController));
	
})



module.exports = router;