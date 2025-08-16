let model=require("../model/regmodel");

class login{

     login(...data)
    {
      return model.login(data[0]); 
    }
}

module.exports=login;