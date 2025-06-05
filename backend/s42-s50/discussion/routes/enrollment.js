const express = require("express");
const enrollmentController = require("../controllers/enrollment.js");
const { verify, verifyAdmin } = require("../auth.js");

const router = express.Router();

//[SECTION] Route to enroll user to a course
router.post("/enroll", verify, enrollmentController.enroll);

//[SECTION] Activity: Route to get the user's enrollements array
router.get("/get-enrollments", verify, enrollmentController.getEnrollments);

/* router.patch("/updateEnrollment"); */
router.patch("/update-enrollment-status", verify, verifyAdmin, enrollmentController.updateEnrollmentStatus);

module.exports = router;
