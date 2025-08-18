import axios from "axios"
import { data } from "react-router-dom";

class ApiService
{
 async savereg (regdata) {
  //  console.log(regdata);
    return await axios.post("http://localhost:2000/savereg", regdata,{headers:{"Content-Type":"multipart/form-data"}});
  }

  login(...data)
  {
    return axios.post("http://localhost:2000/login",data,{withCredentials: true});
  }

  checkUser()
  {
    return axios.get("http://localhost:2000/checkUser",{withCredentials:true})
  }
}

export default new ApiService();
