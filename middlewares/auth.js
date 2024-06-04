const userModel = require("../models/user.js");
const jwt = require('jsonwebtoken');

module.exports = isAuthencated =async (req , res , next)=>{
    const {token} = req.cookies;


    if(!token)
        {
            return res.status(400).json({
                success: false,
                message: "login first",
            });  
        }

    // let user = await userModel.findById({_id});

    const decoded = jwt.verify(token , "secret");

    req.user = await userModel.findById(decoded._id);
    next();
}