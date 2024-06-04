const mongoose = require('mongoose');

module.exports =  connectdb = mongoose.connect("mongodb://127.0.0.1:27017/testdbbackend")
.then(res=>{
    console.log("connected to db");
}).catch(err=>{
    console.log(err);
})

const schema = new mongoose.Schema({
    name: {
        type:String,
        required:true,

    },
    email : {
        type:String,
        unique:true,
        required:true,
    },
    password : {
        type : String,
        select : false,
        required:true,
    },
    createdAt : {
        type : Date , 
        default : Date.now,
    }
})

module.exports = mongoose.model("User" , schema);
