
const ErrorHandler = require("../middlewares/error.js");
const Task = require("../models/task.js")
module.exports = newTask = async function (req, res, next) {

    
    try {
        const { title, description } = req.body;
        await Task.create({
            title,
            description,
            user: req.user,
        })

        res.status(201).json({
            success: true,
            message: "Task added successfully",
        })

    }
    catch (error) {
        next(error);
    }



}


module.exports = getmyTask = async (req, res, next) => {

    try {

        const userid = req.user._id;

        const task = await Task.find({ user: userid });
    
        res.status(200).json({
            success: true,
            tasks,
    
        });
        
    } catch (error) {
     
        next(error);
    }

   
}


module.exports = updateTask = async (req, res, next) => {


    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
    
            return next(new ErrorHandler("Task not found" , 404))
        }
    
        task.isCompleted = !task.isCompleted;
    
        await task.save();
    
    
    
    
    
        res.status(200).json({
            success: true,
            message: "Task updated",
    
    
        });
        
    } catch (error) {
        
        next(error);
    }



   
}


module.exports = deleteTask = async (req, res, next) => {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return next(new ErrorHandler("Task not found" , 404));
        }
    
        await task.deleteOne();
    
    
        res.status(200).json({
            success: true,
    
    
        });
        
    } catch (error) {

        next(error);
        
    }


   
}