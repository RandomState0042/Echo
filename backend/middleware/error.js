const ErrorHander =require("../utils/errorhander");

module.exports=(err,req,res,next)=>{
    
    err.statusCode= err.statusCode||500;
    err.message=err.message||"Internal Server Error"
// cast error wrong mongodb id error

    if(err.name==="CastError"){
        const message= `Resourse not found. Invalid: ${err.path}`
        err= new ErrorHander(message,400);
    }
// mongoose duplicate key error
    if(err.code===11000){
        const message=`Duplicate ${Object.keys(err.keyValue)} Entered`;
        err= new ErrorHander(message,400);
    }
// wrong json webtoken
if(err.name==="JsonWebTokenError"){
    const message= `Json web Token is invalid Try again`;
    err= new ErrorHander(message,400);
}
// JWT expire error 
if(err.name==="TokenExpiredError"){
    const message= `Json web Token is Expired, Try again`;
    err= new ErrorHander(message,400);
}
    res.status(err.statusCode).json({
        success:false,
        error:err.message,
    });

};