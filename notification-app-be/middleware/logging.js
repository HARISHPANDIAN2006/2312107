const dotenv=require("dotenv").config();
const logapi="http://4.224.186.213/evaluation-service/logs";

async function log(stack,level,package,message) {
    try{
        const response=await fetch(logapi ,{
            method: "POST",
            headers:{
                "content-type":"application/json",
                "Authorization": process.env.token,

            },
            body:JSON.stringify({
                stack,
                level,
                package:packageName,
                message
            })
        });
    }
    catch(err){
        console.log(err.message);
    }
}
module.exports=log;