const express = require("express");
const router = express.Router();
const { verify, verifyAdmin, errorHandler } = require("../auth.js");
const courseController = require("../controllers/course.js");

//[SECTION] Activity: Route for creating a course
// MVC FORM
router.post("/", verify, verifyAdmin, courseController.addCourse);

//LONG FORM
/* router.post("/", verify, verifyAdmin, (req,res)=>{
    courseController.addCourse(req.body).then(resultFromController => res.send(resultFromController));
});  */

//[SECTION] Activity: Route for retrieving all courses
router.get("/", courseController.getAllActive);

router.get("/all", verify, courseController.getAllCourses);

router.post("/search", courseController.getCourse);

router.patch("/:courseId", verify, verifyAdmin, courseController.updateCourse);

router.patch("/:courseId/archive", verify, verifyAdmin, courseController.archiveCourse);

router.patch("/:courseId/activate", verify, verifyAdmin, courseController.activateCourse);

module.exports = router;
