const express = require("express");
const studentController = require("../controllers/studentController");
const courseController = require("../controllers/courseController");
const apiRouter = express.Router();

// Root path: /
apiRouter.get("/", studentController.handleGreeting);

// Students path: /students
apiRouter.get("/students", studentController.handleGetStudents);
apiRouter.get("/courses", courseController.handleGetCourses); 


module.exports = apiRouter;
