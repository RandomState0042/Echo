const express=require("express");
const { getAllUsers, registerUser, loginUser, logout, forgotPassword, resetPassword } = require("../controllers/usercontroller");
const router=express.Router();

router.route("/user").get(getAllUsers)

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

router.route("/password/forgot").post(forgotPassword); 

router.route("/password/reset/:token").put(resetPassword); 

module.exports =router