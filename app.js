// const express = require('express');
// module.exports =  app = express();
// const userModel = require("./models/user.js");
// const router = express.Router();
// const userrouter = require("./routers/user.js");
// const { config } = require('dotenv');

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// config({
//     path : "./models/config.env",
// });





// app.get("/" , (req , res)=>{
//     res.send("hello");
// })

// app.use("api/v1/users ",userrouter);

const express = require('express');
const app = express();
const userrouter = require("./routers/user.js");
const taskrouter = require("./routers/task.js");
const { config } = require('dotenv');
const router = require('./routers/user.js');
const cookieParser = require('cookie-parser');
const errorHanler = require("./middlewares/error.js")
const cors = require('cors'); 

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods:["GET" , "POST" , "PUT" , "DELETE"],
    credentials : true,

}))

// Environment Config
config({
    path: "./models/config.env",
});

// Routes
app.get("/", (req, res) => {
    res.send("hello");
});

// Use the router with the correct path
app.use("/api/v1/users", userrouter);
app.use("/api/v1/task ", taskrouter);


app.use(errorHanler);


// Export the app
module.exports = app;






