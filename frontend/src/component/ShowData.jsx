import React, { useEffect, useState } from "react";
import "../Css/ShowData.css";
import ApiServices from "../services/ApiServices";

let ShowData = (props) => {
  let role = props.id; // e.g. [id, role]
  let [data, setData] = useState([]);

  useEffect(() => {
    ApiServices.getData(role[1], role[0])
      .then((result) => {
      
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [role]); // 👈 runs only when `role` changes

  if(data.length==0)
  {
    return <>
    <h1 style={{textAlign:"center"}}>Loding......</h1>
    </>
  }
  return (
    <>
      <div className="show">
        <div className="page-wrapper">
          <div className="container py-4">
            {/* Search Bar */}
            <nav className="navbar bg-light search-bar">
              <form className="w-100">
                <input
                  className="form-control search-input"
                  type="search"
                  placeholder="Search doctors..."
                  aria-label="Search"
                />
              </form>
            </nav>

            <br />

            {/* Doctor Cards */}
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4"
              id="main"
            >
              {data.length !== 0 ? (
                data.map((item) => (
                  <div className="col" key={item.did}>
                    <div className="card doctor-card text-center">
                      <div className="card-body d-flex flex-column align-items-center">
                        <div className="doctor-avatar">
                          <img
                            src={`https://hospitalmanagementreact-backend-6.onrender.com/public${item.doctor_image}`}
                            alt={`Dr. ${item.doctor_name}`}
                            className="img-fluid"
                          />
                        </div>
                        <h5 className="doctor-name">
                          Dr. {item.doctor_name}
                        </h5>
                        <p className="doctor-specialization">
                          <i className="fas fa-stethoscope me-1"></i>
                          {item.doctor_specialization}
                        </p>
                        <p className="doctor-experience">
                          <i className="fas fa-briefcase me-1"></i>
                          {item.doctor_Experience} years experience
                        </p>
                        <p className="doctor-contact">
                          <i className="fas fa-phone me-1"></i>
                          +91 {item.contact}
                        </p>
                        <p className="doctor-email">
                          <i className="fas fa-envelope me-1"></i>
                          {item.doctor_email}
                        </p>
                      </div>
                      <div className="card-footer doctor-actions">
                        <button className="btn btn-outline-primary btn-sm">
                          <i className="fas fa-pen me-1"></i>Edit
                        </button>
                        <button className="btn btn-outline-danger btn-sm">
                          <i className="fas fa-trash me-1"></i>Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>Doctor Not Found</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowData;
