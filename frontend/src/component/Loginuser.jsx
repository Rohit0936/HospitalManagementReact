import React from "react";
import "../Css/login.css";
import { Link,useNavigate } from "react-router-dom";
import ApiServices from "../services/ApiServices";
import { useState } from "react";


let Loginuser = () => {
   let navigate=useNavigate();

  let [flag,setFlag]=useState(true);

  let login=(e)=>{
   
    e.preventDefault();
    let username=e.target[0].value;
    let password=e.target[1].value;
    //console.log(username,password);
      ApiServices.login(username,password).then((res)=>{
        if(res.data.length!=0 && res.data)
        {
        
          setFlag(true);
           navigate("/admin",{state:{userdata:res.data}});
        }
        else
        {
          setFlag(false);
          //console.log("login falied");
        }
        
      }).catch((err)=>{
        console.log(err);
      }); 

  }
  return (
    <div className="login-page">
      <div className="login-card">
        {/* Left: Welcome Section */}
        <div className="welcome-section">
          <h2>Welcome</h2>
          <p>
            Login to manage hospital activities, patient records, appointments,
            billing, and more.
          </p>
        </div>

        {/* Right: Login Form */}
        <div className="form-section">
          <form onSubmit={login}>
            <label htmlFor="" id={flag?"":"msgcolor"} className="msg">{flag?"":"Invalid username or password"}</label>
            
           <div style={{display:"flex",justifyContent:"space-between"}}><h1>Sign In</h1> <Link style={{textDecoration:"none"}} to="/">❌</Link></div> 

            <div className="form-group">
              <label>User Name 🧑</label>
              <input type="text" name="username" placeholder="Enter username" autoComplete="off" id="username" required/>
            </div>

            <div className="form-group">
              <label>Password 🔒</label>
              <input type="password" name="password" placeholder="Enter password" autoComplete="new-password" id="password" required/>
            </div>

            <input type="submit" value="Sign In" />
            
            <p className="signup-text">Don’t have an account?{" "}<Link to="/registration">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginuser;
