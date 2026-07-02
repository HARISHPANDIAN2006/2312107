const express = require("express");
const cors = require("cors");
const dotenv=require("dotenv").config();

const notificationroute=require("./route/notificationroute");

const app=express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"Application is Running "
    });
});

app.use("/api",notificationroute);

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});