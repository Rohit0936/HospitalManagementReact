let conn=require("../config/db.js");

exports.regData=(...data)=>{

 return new Promise((resolve,reject)=>{
    conn.query("call regdata(?,?,?,?,?,?,?,?,?)",[...data],(err,result)=>{
        if(err)
        {
          //console.log(err);
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
      conn.query("select name,admin_image,username,user_password,role,aid from admin a inner join user u on u.uid=a.uid where u.username=?",[data],(err,result)=>{
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

exports.getData=(...data)=>{

  return new Promise((resolve,reject)=>{

      conn.query("call getData(?,?)",[...data],(err,result)=>{
        if(err)
        {
          reject(err);
        }
        else{
          resolve(result[0]);
        }
      })
  });
}

exports.updateUser=(...updateUser)=>{

   return new Promise((resolve,reject)=>{

    conn.query("update doctor set doctor_name=?,doctor_email=?,doctor_specialization=?,doctor_Experience=? where did=?",[updateUser[1],updateUser[5],updateUser[2],updateUser[3],updateUser[0]],(err,result)=>{
      if(err)
      {
        reject(err);
      }
      else
      {
        resolve("true");
      }
    })
   })
}

exports.delete=(id)=>{

  return new Promise((resolve,reject)=>{

    conn.query("delete from user where uid=?",[id],(err,result)=>{
      if(err)
      {
        reject(err)
      }
      else
      {
        resolve("true");
      }
    })
  })
}
