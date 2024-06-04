const express = require('express');
const router = express.Router();
const userModel = require("../models/user.js");
const getAllusers = require("../controllers/user.js")
const register = require("../controllers/user.js");
const specialfunc = require('../controllers/user.js');
const getuserdetails = require('../controllers/user.js');
const updateuser = require('../controllers/user.js');
const deleteuser = require('../controllers/user.js');
const login = require('../controllers/user.js');
const getmyprofile = require('../controllers/user.js');
const logout = require('../controllers/user.js');
const isAuthencated = require('../middlewares/auth.js');


// router.get("/all" ,  getAllusers )


// router.post("/new", register); // Use POST for creating new users
// router.post("/login" , register );



// router.get("/userid/special" , specialfunc)

// router.get("/userid/:id" , getuserdetails)
// router.put("/userid/:id" , updateuser)
// router.put("/userid/:id" , deleteuser)



// module.exports = router;



// router.get("/all", getAllusers);
router.post("/newuser", register);
router.post("/login", login);
router.post("/logout", logout);


router.get("/my" ,isAuthencated ,  getmyprofile);

module.exports = router;
