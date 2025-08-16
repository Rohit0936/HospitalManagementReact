let express=require("express");
let router=express.Router();
let path=require("path");
let multer=require("multer");
let controller=require("../controller/regControl.js");

let storage=multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,'C:/ReactProject/HospitalManagementReact-main/frontend/public/upload');
    },

    filename:function(req,file,cb)
    {
       // console.log(Date.)
        cb(null,Date.now()+path.extname(file.originalname));
    }
})

let upload=multer({storage:storage});

router.post("/savereg",upload.single("image"),controller.regata)
router.post("/login",controller.login);

module.exports=router;