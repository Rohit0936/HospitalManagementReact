import React, { useEffect } from "react";
import "../Css/home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiServices from "../services/ApiServices";
let count = 0;
let Home = () => {
  let [flag, setFlag] = useState(false);
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    count++;
    ApiServices.checkUser()
      .then((result) => {
        setTimeout(() => {
          if (result.data.length != 0) {
            navigate("/admin", { state: { userdata: result.data } });
          } else {
            setFlag(true);
          }
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate]);

  if (!flag && count == 0) {
    return (
      <>
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark">
          <img
            src="./image/simple-modern-hospital-logo-with-healthcare-medical-template-vector-removebg-preview.png"
            alt="Hospital Logo"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "contain",
              marginBottom: "0px",
            }}
          />
          <p
            className="text-light fw-bold"
            style={{
              marginBottom: "100px",
              width: "100%",
              textAlign: "center",
              paddingLeft: "15px",
            }}
          >
            Loading...
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
            <div className="container-fluid">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img src="./image/logo.jpeg" alt="Logo" width="40" height="40" className="rounded-circle me-2"/>
                <span>RS LifeCare</span>
              </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={() => setIsOpen(!isOpen)}>
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#appointment">
                      Appointment
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
                <div className="navbar-nav " id="bt">
                  <Link to="/registration" className="btn btn-custom">
                    <i className="bi bi-person-plus-fill"></i> Sign Up
                  </Link>
                  <Link to="login" className="btn btn-custom">
                    <i className="bi bi-box-arrow-in-right"></i> Sign In
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide mt-1"
            data-bs-ride="carousel"
          >
            {/*<!-- Carousel Indicators -->*/}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            {/*-- Carousel images with per-slide captions --*/}
            <div className="carousel-inner">
              {/*-- Slide 1 --*/}
              <div
                className="carousel-item active slideimg position-relative "
                data-bs-interval="3000"
              >
                <img
                  src="./image/home_slide.jpg"
                  className="d-block w-100"
                  alt="Hospital"
                />
                <div className="carousel-caption-custom text-center text-dark">
                  <i
                    className="bi bi-plus-circle"
                    style={{ fontSize: "2rem", color: "rgb(234, 7, 22)" }}
                  ></i>
                  <h1 className="display-5 fw-bold">Welcome to RS LifeCare</h1>
                  <p className="lead">
                    Your trusted partner in compassionate healthcare
                  </p>
                </div>
              </div>

              {/*-- Slide 2 --*/}
              <div
                className="carousel-item slideimg position-relative"
                data-bs-interval="3000"
              >
                <img
                  src="./image/expert_img.png"
                  className="d-block w-100"
                  alt="Medical Team"
                />
                <div className="carousel-caption-custom text-center text-white mt-5">
                  <h1 className="display-5 fw-bold">
                    Expert Medical Professionals
                  </h1>
                  <p className="lead">
                    Dedicated to delivering personalized and quality care
                  </p>
                </div>
              </div>

              {/*-- Slide 3 --*/}
              <div
                className="carousel-item slideimg position-relative"
                data-bs-interval="3000"
              >
                <img
                  src="./image/slide.png"
                  className="d-block w-100"
                  alt="Advanced Facilities"
                />
                <div className="carousel-caption-custom text-center text-dark">
                  <i
                    className="bi bi-hospital-fill"
                    style={{ fontSize: "2rem", color: " #0d6efd" }}
                  ></i>
                  <h1 className="display-5 fw-bold">
                    State-of-the-Art Facilities
                  </h1>
                  <p className="lead">
                    Advanced technology for faster, safer recovery
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Image & Info Section --> */}
          <section className="image-info-section py-5 ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  <img
                    src="./image/mak.jpg"
                    alt="Hospital Team"
                    className="img-fluid rounded shadow"
                    width="350"
                    height="350"
                  />
                  <h5
                    className="mt-2 mb-0 fw-bold text-darks"
                    style={{ marginLeft: "140px", marginTop: "10px" }}
                  >
                    Dr.Mak
                  </h5>
                  <small className="text-muted" style={{ marginLeft: "80px" }}>
                    {" "}
                    Cardiology Specialist (USA)
                  </small>
                </div>
                <div className="col-md-6">
                  <h2 className="mb-3">Trusted Care from Certified Expert</h2>
                  <p>
                    We provide round-the-clock emergency care, expert
                    diagnostics, and personalized treatment. Experience
                    world-class service and facilities at our hospital.
                  </p>
                  <ul>
                    <li>✔ 24/7 Emergency Service</li>
                    <li>✔ Advanced Diagnostic Labs</li>
                    <li>✔ Online Appointment System</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Services Section --> */}
          <section className="services-section py-5 bg-light">
            <div className="container">
              <h2 className="text-center mb-5">Our Departments</h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card service-card h-100">
                    <img
                      src="./image/cardiology.jpeg"
                      className="card-img-top"
                      alt="Cardiology"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Cardiology</h5>
                      <p className="card-text">
                        Heart health specialists offering diagnostics, surgery,
                        and rehabilitation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card service-card h-100">
                    <img
                      src="./image/peditrics.jpeg"
                      className="card-img-top"
                      alt="Pediatrics"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Pediatrics</h5>
                      <p className="card-text">
                        Dedicated care for infants, children, and teenagers by
                        experienced pediatricians.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card service-card h-100">
                    <img
                      src="./image/orthopedic.jpeg"
                      className="card-img-top"
                      alt="Orthopedics"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Orthopedics</h5>
                      <p className="card-text">
                        Bone and joint specialists treating fractures,
                        arthritis, and sports injuries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="specialties-section py-5"
            style={{ background: "linear-gradient(90deg, #0066cc, #003366)" }}
          >
            <div className="container text-center">
              <h2 className="text-white mb-4">OUR SPECIALITIES</h2>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card border-0 bg-transparent text-white">
                    <img
                      src="./image/infectious_disease.jpg"
                      className="card-img-top rounded"
                      alt="Infectious Disease"
                    />
                    <div className="card-body">
                      <h5 className="card-title">INFECTIOUS DISEASE</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 bg-transparent text-white">
                    <img
                      src="./image/plastic_surgery.jpg"
                      className="card-img-top rounded"
                      alt="Plastic Surgery"
                    />
                    <div className="card-body">
                      <h5 className="card-title">PLASTIC SURGERY</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 bg-transparent text-white">
                    <img
                      src="./image/gastroenterology.jpg"
                      className="card-img-top rounded"
                      alt="Gastroenterology"
                    />
                    <div className="card-body">
                      <h5 className="card-title">GASTROENTEROLOGY</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 bg-transparent text-white">
                    <img
                      src="./image/urology.jpg"
                      className="card-img-top rounded"
                      alt="Urology"
                    />
                    <div className="card-body">
                      <h5 className="card-title">UROLOGY</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 bg-transparent text-white">
                    <img
                      src="./image/obgyn.jpg"
                      className="card-img-top rounded"
                      alt="Obstetrics & Gynaecology"
                    />
                    <div className="card-body">
                      <h5 className="card-title">OBSTETRICS & GYNAECOLOGY</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 bg-transparent text-white">
                    <img
                      src="./image/general_surgery.jpg"
                      className="card-img-top rounded"
                      alt="General Surgery"
                    />
                    <div className="card-body">
                      <h5 className="card-title">GENERAL SURGERY</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Footer Section -->  */}
          <footer className="bg-dark text-white py-4">
            <div className="container">
              <div className="row">
                {/* <!-- Hospital Info --> */}
                <div className="col-md-4 mb-3">
                  <h5>RS LifeCare</h5>
                  <p>
                    Providing world-class healthcare with compassion and
                    expertise. Your health is our priority.
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Health St, Wellness City, HC
                    12345
                  </p>
                  <p>
                    <strong>Phone:</strong> (123) 456-7890
                  </p>
                  <p>
                    <strong>Email:</strong> info@rslifecare.com
                  </p>
                </div>

                {/* <!-- Quick Links --> */}
                <div className="col-md-4 mb-3">
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="#home"
                        className="text-white text-decoration-none"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#services"
                        className="text-white text-decoration-none"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#appointment"
                        className="text-white text-decoration-none"
                      >
                        Appointment
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="text-white text-decoration-none"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="/login"
                        className="text-white text-decoration-none"
                      >
                        Log In
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Social Media & Newsletter --> */}
                <div className="col-md-4 mb-3">
                  <h5>Stay Connected</h5>
                  <p>Follow us on social media:</p>
                  <div className="mb-3">
                    <a href="#" className="text-white me-2">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="text-white me-2">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="text-white me-2">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="text-white">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <button className="btn btn-success" type="button">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <hr className="bg-light" />
              <div className="text-center">
                <small>
                  Created by <strong>Sumit</strong> and <strong>Rohit</strong>
                </small>
                <br />
                <small>&copy; 2025 Rs LifeCare. All Rights Reserved.</small>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
};

export default Home;
