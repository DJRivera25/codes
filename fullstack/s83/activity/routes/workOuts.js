const express = require("express");
const { verify } = require("../auth.js");
const {
  addWorkOut,
  getWorkOut,
  updateWorkOut,
  deleteWorkOut,
  completeWorkOutStatus,
} = require("../controllers/workOuts.js");

const router = express.Router();

router.post("/addWorkout", verify, addWorkOut);
router.get("/getMyWorkouts", verify, getWorkOut);
router.patch("/updateWorkout/:id", verify, updateWorkOut);
router.delete("/deleteWorkout/:id", verify, deleteWorkOut);
router.patch("/completeWorkoutStatus/:id", verify, completeWorkOutStatus);

module.exports = router;
