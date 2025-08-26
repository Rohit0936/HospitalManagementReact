import React from "react";
import ReactDom from "react-dom";
import "../Css/reg.css";
import ApiServices from "../services/ApiServices";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Admin from "./Admin";


let Reg = (props) => {

  let st=props.st;
  let setRole=props.setRole;
  let navigate = useNavigate();
  //Form Validation

  let [name, setName] = useState(true);
  let [email, setEmail] = useState(true);
  let [contact, setContact] = useState(true);
  let [password, setPassword] = useState(true);

  let namevalid = (e) => {
    if (e.length == 0) {
      setName(true);
    }
    for (let i = 0; i < e.length; i++) {
      let char = e.charCodeAt(i);
      if (
        (char >= 65 && char <= 90) ||
        (char >= 97 && char <= 122) ||
        char == 32
      ) {
        setName(true);
      } else {
        setName(false);
        break;
      }
    }
  };

  let nameEdit = () => {
    if (name) {
      let data = document.getElementById("name").value;
      data = data.toLowerCase().split(" ");

      let temp = "";
      for (let i = 0; i < data.length; i++) {
        data[i] = data[i].trim();
        let char = data[i].charCodeAt(0);
        if (char >= 97 && char <= 122) {
          char = String.fromCharCode(char - 32);

          temp = temp + char + data[i].substring(1) + " ";
          //console.log(temp);
        }
      }
      document.getElementById("name").value = temp;
    }
  };

  let emailValid = (e) => {
    nameEdit();
    email = true;

    if ((e.endsWith("@gmail.com") || e.endsWith("@gmail.in" || e.length == 0)) && email && !e.includes("..") && !e.includes("@@") && e.lastIndexOf("@") == e.indexOf("@"))
       {
      //console.log(e,"====>",email)
      setEmail(true);
    } else {
      if (e.length == 0) {
        setEmail(true);
      } else {
        setEmail(false);
      }
    }
  };

  let validContact = (e) => {
    nameEdit();
    if (e.length == 10 || e.length == 0) {
      setContact(true);
    } else {
      setContact(false);
    }
  };

  let compare = (e) => {
    let pass = document.getElementById("pass").value;
    if (pass == e) {
      setPassword(true);
    } else {
      setPassword(false);
    }
  };
  // form validation

  let [flag, setFlag] = useState(true);
  let addImg = (e) => {
    let path = URL.createObjectURL(e.target.files[0]);
    let img = document.createElement("img");
    img.setAttribute("src", path);

    let div = document.getElementById("img");
    div.appendChild(img);
  };

  let savereg = (e) => {
    e.preventDefault();
    if (name && email && contact && password) {
      let name1;
      let email1;
      let contact1;
      let password1;
      let image1;
      let role;
      let data;
      let aid;

      if (e.target.length==9) {

        //  Doctor Add in database
         name1 = e.target[0].value;
       email1 = e.target[1].value;
       contact1 = e.target[2].value;
      let specialization=e.target[3].value;
      let experience=e.target[4].value;
       password1 = e.target[5].value;
       image1 = e.target[7].files[0];
       aid=props.role[1].aid
       role="Doctor";
       aid=props.role[1].aid;
  
        data = { name1, email1, contact1, password1, image1,specialization,experience,role,aid};
      } 
      else 
      {
       name1 = e.target[0].value;
       email1 = e.target[1].value;
       contact1 = e.target[2].value;
       password1 = e.target[3].value;
       image1 = e.target[5].files[0];
       role="Admin";
       data = { name1, email1, contact1, password1, image1,role};       
      }
    
       ApiServices.savereg(data)
          .then((res) => {
            if (res.data) {
              // console.log("Registration successful:", res.data);
              if(role=="Admin")
              {
                 navigate("/login");
              }
              else if(role=="Doctor")
              {
                setRole("ShowData");
                <Admin st={st} setRole={setRole}/>
              }
             
            } else {
              // console.log("Registration falied:", res.data);
              setFlag(false);
            }
          })
          .catch((err) => {
            console.error("Registration error:", err);
          });


    } else {
      alert("Restration Failed..");
    }
  };
  return (
    <>
      <div
        className="container-fliud"
        id={props.role[0] != "admin" ? "role" : "reg"}
      >
        <h1>
          {props.role[0] == "doctor"
            ? "📝 Doctor Form"
            : "📝 Registraction Form"}
        </h1>
        <form onSubmit={savereg} encType="multipart/form-data">
          <div className="mb-3">
            {props.role[0] == "admin" ? (
              <label htmlFor="" style={{ width: "100%", textAlign: "end" }}> 
                <Link style={{ textDecoration: "none" }} to="/">
                  ❌
                </Link>
              </label>
            ) : (
              ""
            )}
            <label className="form-label">👤 Name: </label>
            <label htmlFor="" style={{ marginLeft: "10px", color: "red" }}>
              {name ? "" : "Inavlid Name(Enter only character)"}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              autoComplete="off"
              onKeyUp={(e) => namevalid(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">📧 Email:</label>
            <label htmlFor="" style={{ marginLeft: "10px", color: "red" }}>
              {email ? "" : "Inavlid email"}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              autoComplete="off"
              onClick={nameEdit}
              onKeyUp={(e) => emailValid(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">📱 Contact:</label>
            <label htmlFor="" style={{ marginLeft: "10px", color: "red" }}>
              {contact ? "" : "Inavlid Contact"}
            </label>
            <input
              type="Number"
              className="form-control"
              aria-describedby="emailHelp"
              onClick={nameEdit}
              autoComplete="off"
              onKeyUp={(e) => validContact(e.target.value)}
              required
            />
          </div>

          {/* input for doctor */}

          {props.role[0] == "doctor" ? (
            <div className="mb-3">
              <label className="form-label">🩺 Specialization:</label>
              <label
                htmlFor=""
                style={{ marginLeft: "10px", color: "red" }}
              ></label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                onClick={nameEdit}
                autoComplete="off"
                required
              />
            </div>
          ) : (
            ""
          )}

          {/* input for doctor */}
          {props.role[0] == "doctor" ? (
            <div className="mb-3">
              <label className="form-label">📈 Experience:</label>
              <label
                htmlFor=""
                style={{ marginLeft: "10px", color: "red" }}
              ></label>
              <input
                type="number"
                className="form-control"
                aria-describedby="emailHelp"
                onClick={nameEdit}
                autoComplete="off"
                required
              />
            </div>
          ) : (
            ""
          )}

          <div className="mb-3">
            <label className="form-label">🔑 Password:</label>
            <input
              type="password"
              id="pass"
              className="form-control"
              onClick={nameEdit}
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">✅ Confirm Password:</label>
            <label htmlFor="" style={{ marginLeft: "10px", color: "red" }}>
              {password ? "" : "Password not match"}
            </label>
            <input
              type="password"
              className="form-control"
              onClick={nameEdit}
              aria-describedby="emailHelp"
              onKeyUp={(e) => compare(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <div className="image" id="img"></div>
            <label className="form-label">🖼️ Upload Image:</label>
            <input
              type="file"
              className="form-control"
              onClick={nameEdit}
              aria-describedby="emailHelp"
              onChange={(e) => addImg(e)}
              required
            />
          </div>
          <div className="mb-3">
            <button
            type="submit"
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "20px",
                backgroundColor: "blue",
                color: "white",
                fontSize: "17px",
                border: "none",
              }}
            >
              Submit
            </button>
            {/* <button type="Submit" value="Submit" style={{backgroundColor:"blue",color:"white"}} className="form-control" >Submit<button/> */}
            <label
              htmlFor=""
              style={{
                color: "red",
                width: "100%",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              {flag ? "" : "Contact and Email already present"}
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Reg;
