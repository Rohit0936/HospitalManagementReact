import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Css/admin.css";
import Error from "./Error";
import ApiServices from "../services/ApiServices";

let Admin = () => {
  let navigate = useNavigate();
  let [url, setUrl] = useState("/adminhome");
  let location = useLocation();
  let data = location.state?.userdata || [];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  let setrole = (e) => {
    setUrl(`/addDoctor?id=${data.aid}&redirect=/showdata`);
  };
  let setForm = (e) => {
    setUrl("/adminhome");
    setSidebarOpen(!sidebarOpen);
  };

  let getData = (e) => {
    setSidebarOpen(!sidebarOpen);
    let aid = [data.aid, e];
    setUrl(`/showdata?id=${aid}&redirect=/showdata`);
  };

  let logoutlogin = () => {
    ApiServices.logoutlogin()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (data.length === 0) {
    return <Error />;
  } else {
    return (
      <div className="admin">
        {/* Sidebar Toggle Button (Mobile Only) */}
        <button
          className="btn-toggle d-md-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Mobile Bar */}
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

        {/* Main layout */}
        <div className="main-content">
          {/* Sidebar */}
          <div className="slidebar">
            <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
              <h4>
                <i className="fas fa-hospital"></i> Admin Panel
              </h4>
              {data.admin_image && (
                <img
                  src={`http://localhost:2000/public${data.admin_image}`}
                  alt="Doctor"
                />
              )}

              <div className="admin-name">{data.name}</div>

              <ul className="nav flex-column">
                <li className="nav-item">
                  <button
                    className="nav-link"
                    value="admin"
                    onClick={(e) => setForm(e.target.value)}
                  >
                    <i className="fas fa-tachometer-alt"></i> Dashboard
                  </button>
                </li>

                {/* Doctors */}
                <input type="checkbox" id="doctors-toggle" hidden />
                <label className="nav-link" htmlFor="doctors-toggle">
                  <i className="fas fa-user-md"></i> Doctors
                </label>
                <div className="submenu">
                  <button
                    className="nav-link"
                    value="doctor"
                    onClick={(e) => setrole(e.target.value)}
                  >
                    ➕ Add Doctor
                  </button>
                  <button
                    className="nav-link"
                    value="doctor"
                    onClick={(e) => getData(e.target.value)}
                  >
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

                {/* Patients */}
                <li className="nav-item">
                  <a className="nav-link" href="/show_patient?s=n">
                    <i className="fas fa-users"></i> Patients
                  </a>
                </li>

                {/* Logout */}
                <li className="nav-item">
                  <button className="nav-link" onClick={logoutlogin}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Content with iframe */}
          <div className="content">
            <div className="iframe-container">
              <iframe src={url} title="Admin Home"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Admin;
