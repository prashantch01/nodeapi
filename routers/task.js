const express = require('express')
const router = express.Router();
const newTask = require("../controllers/task.js");
const getmyTask = require("../controllers/task.js");
const updateTask = require("../controllers/task.js");
const deleteTask = require("../controllers/task.js");
const isAuthencated = require("../middlewares/auth.js")

router.post("/new" , isAuthencated, newTask);
router.post("/me" , isAuthencated, getmyTask);
router.route("/:id").put( isAuthencated, updateTask).delete( isAuthencated , deleteTask);

module.exports = router;