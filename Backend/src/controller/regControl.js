let regdata=require("../model/regmodel");
let regService=require("../services/regData");
let login=require("../services/login");
let bcrypt=require("bcrypt");
let fs=require("fs");
let path=require("path");
exports.regata=((req,res)=>{
    let {name,email,contact,password} = req.body;

    
         let r=new regService();
         let image=path.basename(req.file.path);
         
        image="./upload/"+image;
        let pass=bcrypt.hashSync(password,8);
       // console.log(pass);
       
        r.regData(email,pass,name,contact,image).then((result)=>{ 
            res.send("true");
        }).catch((err)=>{
            res.send("false");
        });
})

exports.login=((req,res)=>{
    let [username,password]=req.body;
    let l=new login();
    l.login(username,password).then((result)=>{
        let flag=bcrypt.compareSync(password,result.user_password);
        if(flag)
        {
            res.send(result);
        }
        else{
            res.send([]);
        }
    }).catch((err)=>{
        //console.log(err);
        res.send("false");
    })
})