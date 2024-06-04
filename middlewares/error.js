module.exports = class ErrorHandler extends Error{
    constructor(message , statusCode)
    {
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = errorHanler = (err, req , res , next)=>{
 
    err.message = err.message || "Internal Server Error"
    err.statusCode = err.statusCode || 500;

    return res.status(404).json({
        success : false,
        message : err.message,
    })
}