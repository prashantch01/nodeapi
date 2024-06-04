// const userModel = require("../models/user.js");
// const bcrypt = require('bcrypt');
// const jwt = require("jsonwebtoken");

//  const getAllusers = async (req , res)=>{

   

// }

 
// const login = async (req , res , next)=>{ }
//   const register = async (req , res)=>{ 
   
//     const { name , email , password} = req.body

//     let  user = await userModel.findOne({email})

//     if(user)
//         {
//             return res.status(404).json({
//                 success: false,
//                 message : "User already exists",
//             });

//         }


//         const hashedpassword  = await bcrypt.hash(password , 10 );

//     user =  await userModel.create({
//         name : name , 
//         email  : email,
//         password : hashedpassword,

//      })

//      let token = await jwt.sign({_id: user._id} , "secret");

//      res.status(201).cookie("token" , token,{
//         httpOnly:true,
//         maxAge : 15 * 60 * 1000,
//      }).json({
//         success : true,
//         message : "may be Register",
//      })




//   }




// const getuserdetails = async (req , res)=>{
    
// }








const userModel = require("../models/user.js");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const sendcookie = require("../utils/features.js");
const ErrorHandler = require("../middlewares/error.js");


const getAllusers = async (req, res) => {
    // Implementation for getting all users
};

const login = async (req, res, next) => {
    try {
        const {email , password}  = req.body;

    let user = await userModel.findOne({email}).select("+password");

    if (user) {
        return next(new ErrorHandler("Invalid email or password" , 400));
    }


    let isMatch = bcrypt.compare(password , user.password );

    if (!isMatch) {
        return next(new ErrorHandler("Invalid email or password" , 400));
    }

    sendcookie(user , res , `welcome sir ${user.name}` , 201);

    } catch (error) {
        next(error);
    }
};

// const register = async (req, res) => {
//     const { name, email, password } = req.body;

//     let user = await userModel.findOne({ email });

//     if (user) {
//         return res.status(404).json({
//             success: false,
//             message: "User already exists",
//         });
//     }

//     const hashedpassword = await bcrypt.hash(password, 10);

//     user = await userModel.create({
//         name: name,
//         email: email,
//         password: hashedpassword,
//     });


//     sendcookie(user , res , "Registed" , 201);

    
// };



const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

    // Validate input data
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    let user = await userModel.findOne({ email });


    
    if (user) {
        return next(new ErrorHandler("User already exists" , 400));
    }

   

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await userModel.create({
        name,
        email,
        password: hashedPassword,
    });

    let token = await jwt.sign({ _id: user._id }, "secret");

    res.status(201).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
    }).json({
        success: true,
        message: "User registered",
    });
    } catch (error) {

        next(error)
        
    }
};
const getmyprofile = async (req, res) => {
  
    

    

    res.status(201).json({
        success: true,
        user :req.user,
    });


};



module.exports = logout = async(req ,res )=>{

    res.status(200)
    .cookie("token" , "" , {expires : new Date(Date.now()),
        sameSite : process.env.NODE_ENV==="Development" ? "lax" : "none",
        secure : process.env.NODE_ENV==="Development" ? false : true,

    }
    .json({
        success:true,
        user : req.user, 
    })
)

}

// Export all functions together

module.exports = getAllusers;
module.exports = register;
module.exports = getmyprofile;
module.exports = login;

