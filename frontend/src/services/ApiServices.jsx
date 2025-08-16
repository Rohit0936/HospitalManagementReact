import axios from "axios"

class ApiService
{
 async savereg (regdata) {
   // console.log(regdata);
    return await axios.post("http://localhost:2000/savereg", regdata,{headers:{"Content-Type":"multipart/form-data"}});
  }

  login(...data)
  {
    return axios.post("http://localhost:2000/login",data);
  }
}

export default new ApiService();
