const express=require("express");
const { getAllUsers } = require("../controllers/usercontroller");

const router=express.Router();

router.route("/user").get(getAllUsers)
module.exports =router
