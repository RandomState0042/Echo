const express = require("express");
const app=express();

app.use(express.json())

// router import
const user = require("./routes/userRoute");

app.use("/api/v1",user);

module.exports=app