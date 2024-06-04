const mongoose = require('mongoose');

module.exports =  connectdb = mongoose.connect("mongodb://127.0.0.1:27017/testdbbackend")
.then(res=>{
    console.log("connected to db");
}).catch(err=>{
    console.log(err);
})

const schema = new mongoose.Schema({
    title: {
        type:String,
        required:true,

    },
    description : {
        type:String,
        required:true,
    },
    isCompleted: {
        type : Boolean,
         default : false,
    },
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    createdAt : {
        type : Date , 
        default : Date.now,
    }
})

module.exports = mongoose.model("Task" , schema);
