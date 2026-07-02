const express=require("express");
const router = express.Router();

const {getallnotification,getnotificationbyid}=require("../controllers/notificationcontroller");

router.get("/notifications",getallnotification);
router.get("/notifications/:id",getnotificationbyid);
//router.patch("notification/:id/read",markasread);
//router.patch("notification/readall",markallread);
//router.delete("notification/:id",deletenotification);
module.exports=router;