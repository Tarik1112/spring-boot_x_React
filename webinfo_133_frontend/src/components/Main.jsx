import { useState } from "react";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import Dashboard from "../components/Dashboard"
import { BrowserRouter,Redirect ,Route, Routes } from "react-router-dom";

const Main = () =>{
    return(
        <div>
    <BrowserRouter>
    <Routes>
        <Route exact path="/register" element={<Register />} /> 
         
       
        <Route exact path="/login" element={<Login /> } /> 

        
        <Route exact path="/" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
    </div>
    );
};

export default Main;