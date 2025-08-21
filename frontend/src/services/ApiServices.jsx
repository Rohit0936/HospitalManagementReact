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
    return axios.get(url+"/getData",{params:{role:role[0],aid:role[1]}});
  }
}

export default new ApiService();
