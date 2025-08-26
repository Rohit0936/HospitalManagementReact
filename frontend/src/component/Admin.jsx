import React, { useState } from "react";
import {useLocation } from "react-router-dom";
import "../Css/admin.css"; 
import AdminHome from "./AdminHome";
import Registration from "./Registration";
import Error from "./Error";
import cookie from "js-cookie"
import ShowData from "./showData";
import { useNavigate } from "react-router-dom";
import ApiServices from "../services/ApiServices";

let Admin = () => {
  let navigate=useNavigate();
  let [role,setRole]=useState("");
  let [show,setShow]=useState([]);
  let location = useLocation();
  let data = location.state?.userdata || [];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  let setForm=(e)=>{
    setRole(e);
    setSidebarOpen(!sidebarOpen)
  }

  let getData=()=>{
      setRole("ShowData");
      setSidebarOpen(!sidebarOpen);
  }

  let logoutlogin=()=>{
   ApiServices.logoutlogin().then((result)=>{
      navigate("/")
   }).catch((err)=>{
    console.log(err);
   })
    
  }
   
  if(data.length==0)
  {
    return (<Error/>)
  }
  else
  {
    return (
    <div className="admin">
      {/* Sidebar Toggle Button (Mobile Only) */}
      <button className="btn-toggle d-md-none" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <i className="fas fa-bars"></i>
      </button>

      <div className="mobile-bar d-md-none">
        <span>
          <i className="fas fa-hospital me-2"></i>RS Healthcare
        </span>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom px-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            RS Healthcare
          </a>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <span className="nav-link">
                  <i className="fas fa-user-shield"></i> Welcome, Admin
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     <div className="main-content">
        <div className="slidebar">
            <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
        <h4>
          <i className="fas fa-hospital"></i> Admin Panel
        </h4>
       {data.admin_image && (
  <img 
    src={`https://hospitalmanagementreact-backend-6.onrender.com/public${data.admin_image}`} 
    alt="Doctor" 
  />
)}

        <div className="admin-name">{data.name}</div>

        <ul className="nav flex-column">
          <li className="nav-item">
            <button className="nav-link" value="admin" href="/" onClick={(e)=>setForm(e.target.value)}>
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </button>
          </li>

          {/* Doctors */}
          <input type="checkbox" id="doctors-toggle" hidden />
          <label className="nav-link" htmlFor="doctors-toggle">
            <i className="fas fa-user-md"></i> Doctors
          </label>
          <div className="submenu">
            <button className="nav-link" value="doctor"  onClick={(e)=>setForm(e.target.value)} >
              ➕ Add Doctor
            </button>
            <button className="nav-link" value="doctor" onClick={getData}>
              📋 Show Doctors
            </button>
          </div>

          {/* Receptionists */}
          <input type="checkbox" id="receptionists-toggle" hidden />
          <label className="nav-link" htmlFor="receptionists-toggle">
            <i className="fas fa-user-nurse"></i> Receptionists
          </label>
          <div className="submenu">
            <a className="nav-link" href="/reg_rec">
              ➕ Add Receptionist
            </a>
            <a className="nav-link" href="/show_rec">
              📋 Show Receptionists
            </a>
          </div>

          <li className="nav-item">
            <a className="nav-link" href="/show_patient?s=n">
              <i className="fas fa-users"></i> Patients
            </a>
          </li>

          <li className="nav-item">
            <button className="nav-link" href="/logout" onClick={logoutlogin}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </li>
        </ul>
      </div>

        </div>
        <div className="content" >
          {role=='doctor'?(<Registration role={["doctor",data]} st={role} setRole={setRole}/>):role=='ShowData'?(<ShowData id={[data.aid,"doctor"]}/>):(<AdminHome name={data.name}/>)}
        </div>
     </div>
    </div>
  );
  }
  
};

export default Admin;
