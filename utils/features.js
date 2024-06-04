const { Model } = require("mongoose");
const jwt = require('jsonwebtoken');

module.exports =  sendcookie =  async ( user , res , message , statusCode ) =>{

    let token = await jwt.sign({ _id: user._id }, "secret");

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        sameSite : process.env.NODE_ENV==="Development" ? "lax" : "none",
        secure : process.env.NODE_ENV==="Development" ? false : true,
    }).json({
        success: true,
        message,
    });
}