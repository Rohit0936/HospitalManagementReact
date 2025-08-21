import React from "react";
import ReactDom from "react-dom";
import Home from './component/Home.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About.jsx";
import Registration from "./component/Registration.jsx";
import Loginuser from "./component/Loginuser.jsx";
import Admin from "./component/Admin.jsx";
import ShowData from "./component/showData.jsx";

let App=()=>{
   return<>
   
   <BrowserRouter>
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/registration" element={<Registration role={["admin"]}/>}/>
      <Route path="login" element={<Loginuser/>}/>
      <Route path="admin" element={<Admin />}></Route>
      </Routes>
   </BrowserRouter>
   </>
}

export default App;