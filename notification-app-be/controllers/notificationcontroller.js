require("dotenv").config();

const data="http://4.224.186.213/evaluation-service/notifications";
const getallnotification =async(req,res)=>{
    try{
        const response = await fetch(data,{
            method:"GET",
            headers:{
                "Authorization":process.env.token,
                "Content-Type":"application/json"
            }
        });
        const result=await response.json();
        res.status(response.status).json(result);
    }
    catch(err){
        res.status(300).json({
            status:false,
            message:err.message
        });
    }
};

const getnotificationbyid=async(req,res)=>{
    try{
        const response=await fetch(`${data}/${req.params.id}`,{
            method:"GET",
            headers:{
                "Authorization":process.env.token,
                "Content-Type":"application/json"
            }
        });
        const text = await response.text();

console.log("Status:", response.status);
console.log("Response:", text);

res.status(response.status).send(text);
    }
    catch(err){
        res.status(300).json({
            status:false,
            message:err.message
        });

    }
}

module.exports={getallnotification,getnotificationbyid};