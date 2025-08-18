import React from "react";
import ReactDom from "react-dom";
import "../Css/reg.css"
import ApiServices from "../services/ApiServices";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

let Reg=()=>{
  //Form Validation 
  let [name,setName]=useState(true);
  let [email,setEmail]=useState(true);
  let [contact,setContact]=useState(true);
  let [password,setPassword]=useState(true);
   let namevalid=(e)=>
   {
     if(e.length==0)
     {
      setName(true);
     }
     for(let i=0;i<e.length;i++)
     {
       let char=e.charCodeAt(i);
       if((char>=65 && char<=90) ||(char>=97 && char<=122) || (char==32))
      {
        setName(true) 
      } 
      else
      {
        setName(false);
        break;
      }
     }
   }

   let nameEdit=()=>{
    if(name)
    {
      let data=document.getElementById("name").value;
    data=data.toLowerCase().split(" ");
     
      let temp="";
       for(let i=0;i<data.length;i++)
       {
          data[i]=data[i].trim();
          let char=data[i].charCodeAt(0);
           if( char>=97 && char<=122)
           {
              char=String.fromCharCode(char-32);
              
              temp=temp+char+ data[i].substring(1)+" ";
              //console.log(temp);
           }
       }
       document.getElementById("name").value=temp;
    }
   }

  let emailValid=(e)=>{
     nameEdit()
    email=true;
    
     if((e.endsWith("@gmail.com") || e.endsWith("@gmail.in" || e.length==0)) && email && !e.includes("..") && !e.includes("@@") && (e.lastIndexOf("@")==e.indexOf("@")))
     {
         //console.log(e,"====>",email)
          setEmail(true);
     }
     else
     {
      if(e.length==0)
      {
        setEmail(true);
      }
      else
      {
        setEmail(false)
      }
      
     }
  }

  let validContact=(e)=>{
    nameEdit()
    if(e.length==10 || e.length==0)
    {
      setContact(true)
    }
    else
    {
       setContact(false)
    }
  }

  let compare=(e)=>{

       let pass=document.getElementById("pass").value;
       if(pass==e)
       {
        setPassword(true);
       }
       else
       {
        setPassword(false);
       }
  }
  // form validation

    let navigate=useNavigate();
    let [flag,setFlag]=useState(true);
    let addImg=(e)=>{
       let path=URL.createObjectURL(e.target.files[0]);
        let img=document.createElement("img");
        img.setAttribute("src",path);

        let div=document.getElementById("img");
        div.appendChild(img);
      
    }

  let savereg=(e)=>{
      e.preventDefault();
      if(name && email && contact && password)
      {
    
       
        let name1=e.target[0].value;
        let email1=e.target[1].value;
        let contact1=e.target[2].value;
        let password1=e.target[3].value;
        let image1=e.target[5].files[0];
       
        let data={name1,email1,contact1,password1,image1};

        ApiServices.savereg(data)
      .then((res) => {
        if(res.data)
        {
          // console.log("Registration successful:", res.data);
           navigate("/login"); 
        }
        else
        {
           // console.log("Registration falied:", res.data);
            setFlag(false);
        } 
      })
      .catch((err) => {
        console.error("Registration error:", err);
      });
      }
      else
      {
        alert("Restration Failed..")
      }     
    }
    return<>
    <div className="container-fliud" id="reg">
        <h1>📝 Registraction Form</h1>
<form onSubmit={savereg} encType="multipart/form-data">
  <div className="mb-3">
    <label htmlFor=""  style={{width:"100%",textAlign:"end"}}><Link style={{textDecoration:"none"}} to="/">❌</Link></label>
    <label className="form-label" >👤 Name: </label><label htmlFor="" style={{marginLeft:"10px",color:"red"}}>{name?"":"Inavlid Name(Enter only character)"}</label>
    <input type="text" className="form-control" id="name"  aria-describedby="emailHelp" autoComplete="off" onKeyUp={(e)=>namevalid(e.target.value)} required/>
  </div>

  <div className="mb-3">
    <label  className="form-label">📧 Email:</label><label htmlFor="" style={{marginLeft:"10px",color:"red"}}>{email?"":"Inavlid email"}</label>
    <input type="email" className="form-control" id="email" autoComplete="off" onClick={nameEdit} onKeyUp={(e)=>emailValid(e.target.value)} required/>
  </div>

  <div className="mb-3">
    <label  className="form-label">📱 Contact:</label><label htmlFor="" style={{marginLeft:"10px",color:"red"}}>{contact?"":"Inavlid Contact"}</label>
    <input type="Number" className="form-control" aria-describedby="emailHelp" onClick={nameEdit} autoComplete="off" onKeyUp={(e)=>validContact(e.target.value)} required/>
  </div>

  <div className="mb-3">
    <label className="form-label">🔑 Password:</label>
    <input type="password" id="pass" className="form-control" onClick={nameEdit} aria-describedby="emailHelp"  required/>
  </div>
  <div className="mb-3">
    <label className="form-label">✅ Confirm Password:</label><label htmlFor="" style={{marginLeft:"10px",color:"red"}}>{password?"":"Password not match"}</label>
    <input type="password" className="form-control" onClick={nameEdit}  aria-describedby="emailHelp" onKeyUp={(e)=>compare(e.target.value)} required/>
  </div>
  <div className="mb-3">
    <div className="image" id="img"></div>
    <label className="form-label">🖼️ Upload Image:</label>
    <input type="file" className="form-control" onClick={nameEdit} aria-describedby="emailHelp" onChange={(e)=>addImg(e)} required/>
  </div>
    <div className="mb-3">
    <input type="Submit" style={{backgroundColor:"blue",color:"white"}} className="form-control" />
    <label htmlFor="" style={{color:"red",width:"100%",textAlign:"center",paddingTop:"10px"}}>{flag?"":"Contact and Email already present"}</label>
  </div>
  
</form>
    </div>
       
    </>
}

export default Reg;