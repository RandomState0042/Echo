const express = require("express");
const app=express();

app.use(express.json())

// router import
const user = require("./routes/route");

app.use("/api/v1",user);

module.exports=app