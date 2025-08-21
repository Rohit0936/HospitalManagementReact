import React  from "react";
import "../Css/admin.css"

let AdminHome=(props)=>{

    return (<div className="page-wrapper">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card admin-card text-center">
            <div className="card-content">
              <div className="header-container mb-4">
                <i className="fas fa-user-shield header-logo"></i>
                <h2 className="text-dark mb-0">Welcome Admin</h2>
              </div>
              <div className="gradient-divider mx-auto mb-4"></div>
              <h3>{props.name}</h3>
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
)
}

export default AdminHome;