import axios from "axios"
import { data } from "react-router-dom";

let url="http://localhost:2000";
class ApiService
{
  

 async savereg (regdata) {
  //  console.log(regdata);
    return await axios.post(url+"/savereg", regdata,{headers:{"Content-Type":"multipart/form-data"}});
  }

  login(...data)
  {
    return axios.post(url+"/login",data,{withCredentials: true});
  }

  checkUser()
  {
    return axios.get(url+"/checkUser",{withCredentials:true})
  }

  getData(...role)
  {
    return axios.get(url+"/getData",{params:{aid:role[0],role:role[1]}});
  }

  logoutlogin()
  {
    return axios.get(url+"/logout",{withCredentials:true});
  }

  updateUser(...updatedata)
  {
   //console.log(updatedata)
    return axios.put(url+"/updateUser",updatedata,{withCredentials:true});
  }

  delete(id)
  {
    return axios.delete(url+"/delete",{params:{uid:id}});
  }
}

export default new ApiService();
