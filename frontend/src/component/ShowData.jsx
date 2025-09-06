import React, { useEffect, useState } from "react";
import "../Css/showData.css";
import ApiServices from "../services/ApiServices";
import UpdateFrom from "./UpdateFrom";
import { useSearchParams } from "react-router-dom";

let ShowData = () => {
  let [data, setData] = useState([]);
  let [count,setCount]=useState(0);
  let [filterData,setFilterData]=useState([]);
  let [search,setSearch]=useState("");
  let [flag,setflag]=useState(true);
  let [deleteModel,setDeleteModel]=useState(false);
  let [model,setModel]=useState(false);
  let [updateValue,setUpdateValue]=useState(null);
  let [params]=useSearchParams();
  let [r,setR]=useState("");
  let [deleteId,setDeleteId]=useState("");
  


  useEffect(() => {
  let role=params.get("id");
  role=role.split(",");
  setR(role[1]);
    ApiServices.getData(role[0], role[1])
      .then((result) => {
        setTimeout(()=>{
          if(result.data.length==0)
          {
            setflag(false);
          }
          else
          {
             setData(result.data);
             setFilterData(result.data);
             setCount(count+1);
          }
          
        },600);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  let mo=(updateValue)=>
  {
    setUpdateValue(updateValue)
     setModel(!model);
  }

let setId=(id)=>{
     setDeleteId(id);
     setDeleteModel(!deleteModel);
  }

let searchData=(e)=>{
     let temp=filterData;
     if(e)
     {
       temp=temp.filter((data)=>
      data.doctor_name.toLowerCase().includes(e.toLowerCase())||
      data.contact.includes(e)||
      data.doctor_email.toLowerCase().includes(e.toLowerCase()) ||
      data.doctor_specialization.includes(e));
        setData(temp);
     }
     else
     {
      let temp2=data;
      setData(filterData);
     }
   setSearch(e)
}

let handleDelete=(id)=>{
   ApiServices.delete(id).then(()=>{
      let aid=params.get("id");
      let redirect=params.get("redirect");
      let iframe=window.parent.document.querySelector("iframe");
      //iframe.src=`${redirect}?id=${aid}&redirect=${redirect}`
      if(iframe && redirect)
      {
        iframe.src=`${redirect}?id=${aid}&redirect=${redirect}`;
        setDeleteModel(deleteModel);
      }
   }).catch((err)=>{
      console.log(err);
   })
}


  if(data.length==0 && count==0)
  {
    return <>
    {flag?( <h1 style={{textAlign:"center",marginTop:"250px"}}>Loding......</h1>):(<h1 style={{textAlign:"center",marginTop:"200px"}}>Doctor Not available</h1>)}
   
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
                  value={search}
                   onChange={(e)=>searchData(e.target.value)}
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
                            src={`http://localhost:2000/public${item.doctor_image}`}
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
                        
                        <button className="btn btn-outline-primary btn-sm"  onClick={()=>mo(item)}>
                          <i className="fas fa-pen me-1"></i>Edit
                        </button>
                        <button className="btn btn-outline-danger btn-sm" onClick={()=>setId(item.uid)}>
                          <i className="fas fa-trash me-1"></i>Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1 style={{width:"100%",textAlign:"center",marginBottom:"310px"}}>Doctor Not Found</h1>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {deleteModel && (
  <div className="deleteMain">
    <div className="deleteContent">
      <h5>Do you want to Delete</h5>
      <div className="actions">
        <button
          className="btn btn-danger"
           onClick={() => handleDelete(deleteId)}
        >
          Yes, Delete
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setDeleteModel(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      {model?(<UpdateFrom setModel={setModel} data={[updateValue,r[1]]}/>):""}
     
    </>
  );
};

export default ShowData;
