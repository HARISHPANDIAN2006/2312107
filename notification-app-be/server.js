const express = require("express");
const cors = require("cors");
const dotenv=require("dotenv").config();
const app=express();

app.get("/",(req,res)=>{
    console.log("server is running");
})

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});