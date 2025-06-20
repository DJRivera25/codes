const express = require("express");
const { verify } = require("../auth.js");
const { registerUser, loginUser, getDetails } = require("../controllers/users.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/details", verify, getDetails);

module.exports = router;
