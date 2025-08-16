let conn=require("../config/db.js");

exports.regData=(...data)=>{

 return new Promise((resolve,reject)=>{
    conn.query("call regdata(?,?,'admin',?,?,?)",[...data],(err,result)=>{
        if(err)
        {
          reject("false");
        }
        else{
          resolve("true");
        }
    })
  })  
}

exports.login=(data)=>{

  return new Promise((resolve,reject)=>{
      conn.query("select name,admin_image,username,user_password,role from admin a inner join user u on u.username=?",[data],(err,result)=>{
        if(err)
        {
          reject(err);
        }
        else
        {
          
          resolve(result[0]);
        }
      })
  })
}

      
