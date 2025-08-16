import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Css/admin.css";

let Admin = () => {
  let location = useLocation();
  let data = location.state?.userdata || {};

  // Sidebar toggle state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin">
      {/* Sidebar Toggle Button (Mobile Only) */}
      <button
        className="btn-toggle d-md-none"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
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

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
        <h4>
          <i className="fas fa-hospital"></i> Admin Panel
        </h4>
        {data.admin_image && <img src={data.admin_image} alt="Doctor" />}
        <div className="admin-name">{data.name}</div>

        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </a>
          </li>

          {/* Doctors */}
          <input type="checkbox" id="doctors-toggle" hidden />
          <label className="nav-link" htmlFor="doctors-toggle">
            <i className="fas fa-user-md"></i> Doctors
          </label>
          <div className="submenu">
            <a className="nav-link" href="/reg_doc">
              ➕ Add Doctor
            </a>
            <a className="nav-link" href="/showdoctor?status=n">
              📋 Show Doctors
            </a>
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
            <a className="nav-link" href="/logout">
              <i className="fas fa-sign-out-alt"></i> Logout
            </a>
          </li>
        </ul>
      </div>

<div className="adminhome">
     <div className="page-wrapper">
    <div className="container py-5">
      {/* <!-- Welcome Message --> */}
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card admin-card text-center">
            <div className="card-content">
              <div className="header-container mb-4">
                <i className="fas fa-user-shield header-logo"></i>
                <h2 className="text-dark mb-0">Welcome Admin</h2>
              </div>
              <div className="gradient-divider mx-auto mb-4"></div>
              <h3>{data.name}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Admin Features --> */}
      <div className="card-grid mt-5">
        <div className="feature-card">
          <i className="fas fa-user-md"></i>
          <h4>Manage Staff</h4>
          <p>Monitor doctors, nurses, and reception activities.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-bed"></i>
          <h4>Room Allocation</h4>
          <p>Control and manage patient room assignments.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-chart-line"></i>
          <h4>Reports & Logs</h4>
          <p>View hospital performance and activity logs.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Admin;
