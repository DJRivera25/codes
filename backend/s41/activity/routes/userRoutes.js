const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");

router.post("/register", (req, res)=> {

    userController.registerUser(req.body).then(resultFromController => res.send(resultFromController))
	
})

router.post("/login", (req, res)=> {

    userController.loginUser(req.body).then(resultFromController => res.send(resultFromController))

}) 

router.patch("/:id/change-details", (req,res) => {
    userController.updateUser(req.params.id, req.body).then(resultFromController => res.send(resultFromController))
})

module.exports = router;