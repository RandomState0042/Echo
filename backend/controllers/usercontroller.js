const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail=require("../utils/sendEmail")
const crypto = require("crypto")

exports.getAllUsers=(req,res)=>{
    res.status(200).json({message:"working fine"})
}

// Register a user
exports.registerUser = catchAsyncErrors(async(req,res,next)=>{

    const{name,email,password}=req.body;

    const user =await User.create({
        name,email,password
    });

    sendToken(user,201,res);

});

// Login User
exports.loginUser =catchAsyncErrors(async(req,res,next)=>{
    const {email,password}=req.body;

    if(!email||!password){
        return next(new ErrorHander("Please Enter Email & Password",400))
    }

    const user = await User.findOne({email}).select("+password");
    
    if(!user){
        return next(new ErrorHander("Invalid Email or Password"))
    }
    const isPasswordMatched=await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid Email or Password",401))
    }
    sendToken(user,200,res);
})

// logout
exports.logout=catchAsyncErrors(async(req,res,next)=>{
    
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    });

    res.status(200).json({
        success:true,
        message:"Logged out"
    });
});

// Forgot password
exports.forgotPassword=catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findOne({email:req.body.email}); 

    if (!user) {
        return next(new ErrorHander("User not found", 404));
      }
    
      // Get ResetPassword Token
      const resetToken = user.getResetPasswordToken();
    
      await user.save({ validateBeforeSave: false });
    
      const resetPasswordUrl = `${req.protocol}://${req.get(
        "host"
      )}/password/reset/${resetToken}`;
    
      const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
      try {
        await sendEmail({
          email: user.email,
          subject: `Echo : Galgotias Club Password Recovery`,
          message,
        });
    
        res.status(200).json({
          success: true,
          message: `Email sent to ${user.email} successfully`,
        });
      } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
    
        await user.save({ validateBeforeSave: false });
    
        return next(new ErrorHander(error.message, 500));
      }
});

exports.resetPassword=catchAsyncErrors(async(req,res,next)=>{
    // creating token hash
    const resetPasswordToken=crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire:{$gt:Date.now()},
    });
    if(!user){
      return next(new ErrorHander("Reset password token is invalid or has been expired",400));
    }
    if(req.body.password!==req.body.confirmPassword){
      return next(new ErrorHander("Password does not password",400));
    }
    user.password=req.body.password;
    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;
  
    await user.save();
    sendToken(user,200,res);
    
  })
  