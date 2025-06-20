const express = require("express");
const { verify, verifyAdmin } = require("../auth.js");
const {
  addMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  addCommentOnMovie,
  getCommentsOnMovie,
} = require("../controllers/movies.js");

const router = express.Router();

router.post("/addMovie", verify, verifyAdmin, addMovie);
router.get("/getMovies", getAllMovies);
router.get("/getMovie/:id", verify, getMovie);
router.patch("/updateMovie/:id", verify, updateMovie);
router.delete("/deleteMovie/:id", verify, deleteMovie);
router.patch("/addComment/:id", verify, addCommentOnMovie);
router.get("/getComments/:id", verify, getCommentsOnMovie);

module.exports = router;
