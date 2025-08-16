import React from "react";
import ReactDom from "react-dom";
import "../Css/about.css"
import { Link } from "react-router-dom";
let About=()=>{
    return<>
    <body id="about" style={{background: "linear-gradient(135deg,rgb(208, 232, 249), #bbdefb)",fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}}>
        <div className="container py-5" >
   <div className="mb-3 d-flex justify-content-start">
    <Link to="/" className="btn btn-3d"><i className="bi bi-arrow-left-circle me-1"></i> Back to Home</Link>
</div>
    <h1 className="text-center section-heading"><i className="bi bi-hospital-fill me-2 text-primary"></i>About Us</h1>
    <div className="about-section">
        <h3><i className="bi bi-info-circle-fill me-2 text-success"></i>About Hospital Management System</h3>
        <p>Our Hospital Management System is a robust full-stack web application designed to streamline hospital operations, including patient registration, doctor management, appointment scheduling, billing, and reporting. It reduces paperwork, improves accuracy, and enhances patient care with efficient data management and real-time tracking.</p>
        <p><strong>Key Features:</strong> Patient management, doctor management, appointment booking, billing, reports, user authentication, and responsive design.</p>
        <p><strong>Technologies Used:</strong> HTML, CSS, Bootstrap, JavaScript, EJS, Node.js, Express.js, MySQL.</p>
    </div>
    <h3 className="text-center section-heading"><i className="bi bi-people-fill me-2 text-warning"></i>Meet Our Developers</h3>
    <div className="row justify-content-center g-4">
        <div className="col-md-4 text-center">
            <div className="developer-card">
                <img src="./image/devloper1.jpg" alt="Rohit" className="developer-img mx-auto"/>
                <div className="card-body">
                    <h5 className="card-title">Rohit Borade</h5>
                    <p className="email-text"><i className="bi bi-envelope-fill text-danger me-1"></i>boraderohit66@gmail.com</p>
                    <p className="card-text"><i className="bi bi-laptop-fill text-primary me-1"></i>Full Stack Developer</p>
                    <a href="https://www.linkedin.com/in/rohit-borade/" target="_blank" className="btn btn-outline-primary btn-sm mt-2"><i className="bi bi-linkedin me-1"></i>LinkedIn Profile</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 text-center">
            <div className="developer-card">
                <img src="./image/devloper2.jpg" alt="Sumit" className="developer-img mx-auto"/>
                <div className="card-body">
                    <h5 className="card-title">Sumit Gadade</h5>
                    <p className="email-text"><i className="bi bi-envelope-fill text-danger me-1"></i>sumitgadade20@gmail.com</p>
                    <p className="card-text"><i className="bi bi-laptop-fill text-primary me-1"></i>Full Stack Developer</p>
                    <a href="https://www.linkedin.com/in/sumit-gadade-aa684134a" target="_blank" className="btn btn-outline-primary btn-sm mt-2"><i className="bi bi-linkedin me-1"></i>LinkedIn Profile</a>
                </div>
            </div>
        </div>
    </div>
    <div className="mission-section mt-5">
        <h3><i className="bi bi-bullseye me-2 text-info"></i>Our Mission</h3>
        <p>We aim to build efficient healthcare systems that help hospitals deliver better patient care using technology while simplifying the workflow for doctors, nurses, and staff.</p>
    </div>
    <div className="contact-section mt-5 text-center">
        <h3><i className="bi bi-telephone-fill me-2 text-danger"></i>Contact Us</h3>
        <p><i className="bi bi-envelope-fill text-success me-2"></i>Email: srtechsolution@gmail.com</p>
        <p><i className="bi bi-telephone-fill text-primary me-2"></i>Phone: 02344248240</p>
<p><i className="bi bi-globe me-1 text-primary"></i> www.srtechsolution.in</p>
    </div>
</div>
    </body>
     
    </>
}

export default About;