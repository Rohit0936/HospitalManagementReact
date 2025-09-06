import React, { useState } from "react";
import "../Css/updateform.css";
import ApiServices from "../services/ApiServices";
import { useNavigate, useSearchParams } from "react-router-dom";

let UpdateFrom = ({ setModel, data }) => {
  let navigate = useNavigate();
  let [msg, setMsg] = useState(true);
  let [params] = useSearchParams();
  const [uname, setUname] = useState(data[0].doctor_name || "");
  const [specialization, setSpecialization] = useState(
    data[0].doctor_specialization || ""
  );
  const [experience, setExperience] = useState(data[0].doctor_Experience || "");
  const [contact, setContact] = useState(data[0].contact || "");
  const [email, setEmail] = useState(data[0].doctor_email || "");

  const [isNameValid, setNameValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isContactValid, setContactValid] = useState(true);

  const handleNameChange = (e) => {
    let val = e.target.value;
    setUname(val);

    if (/^[A-Za-z ]*$/.test(val) || val.length === 0) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const handleEmailChange = (e) => {
    let val = e.target.value;
    setEmail(val);

    if (
      (val.endsWith("@gmail.com") || val.endsWith("@gmail.in")) &&
      !val.includes("..") &&
      !val.includes("@@") &&
      val.lastIndexOf("@") === val.indexOf("@")
    ) {
      setEmailValid(true);
    } else if (val.length === 0) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  // contact validation
  const handleContactChange = (e) => {
    let val = e.target.value;
    setContact(val);

    if (val.length === 10 || val.length === 0) {
      setContactValid(true);
    } else {
      setContactValid(false);
    }
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNameValid && isEmailValid && isContactValid) {
      let updatedDoctor = [
        data[0].did,
        uname,
        specialization,
        experience,
        contact,
        email,
      ];

      ApiServices.updateUser(updatedDoctor)
        .then((r) => {
          let redirect = params.get("redirect");
          setMsg(true);
          setModel(false);
          let iframe = window.parent.document.querySelector("iframe");
          //console.log(redirect,iframe)
          if (redirect && iframe) {
            let aid = params.get("id");
            iframe.src = `${redirect}?id=${aid}&redirect=${redirect}`;
          }
          //navigate("/Showdata",{state:{role:"doctor"}})
        })
        .catch((err) => {
          console.log(err);
          setMsg(false);
        });
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Header */}
        <div className="modal-header">
          <h2>Edit Doctor</h2>
          <button className="close-btn" onClick={() => setModel(false)}>
            &times;
          </button>
        </div>

        {/* Body - wrapped in form */}
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <input
              type="text"
              value={uname}
              placeholder="Doctor Name"
              onChange={handleNameChange}
              required
            />
            {!isNameValid && <p className="error">Invalid name</p>}

            <input
              type="text"
              value={specialization}
              placeholder="Specialization"
              onChange={(e) => setSpecialization(e.target.value)}
              required
            />

            <input
              type="number"
              value={experience}
              placeholder="Experience (years)"
              onChange={(e) => setExperience(e.target.value)}
              required
            />

            <input
              type="text"
              value={contact}
              placeholder="Contact"
              onChange={handleContactChange}
              required
            />
            {!isContactValid && (
              <p className="error">Contact must be 10 digits</p>
            )}

            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={handleEmailChange}
              required
            />
            {!isEmailValid && <p className="error">Invalid email</p>}
          </div>

          {msg ? (
            ""
          ) : (
            <p style={{ width: "100%", textAlign: "center", color: "red" }}>
              Email already present.....
            </p>
          )}
          {/* Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn-cancel"
              onClick={() => setModel(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn-save">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFrom;
