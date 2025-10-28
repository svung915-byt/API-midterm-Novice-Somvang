// controllers/courseController.js

const courseModel = require("../models/courseModel"); // Import the new course model 

const handleGetCourses = (req, res) => {
    const coursesData = courseModel.getAllCourses(); // Get the data
    res.json(coursesData); // Send the data as a JSON response
};

const courseController = {
    handleGetCourses,
};

module.exports = courseController; // Export the handler