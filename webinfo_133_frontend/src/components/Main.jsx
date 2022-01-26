import { useState } from "react";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import Dashboard from "../components/Dashboard"
import { BrowserRouter,Redirect ,Route, Routes, Link, useRoutes } from "react-router-dom";

const Main = () =>{

    const Paths = () => useRoutes([
        {path: "/", element: <Login />},
        {path: "/login", element: <Login />},
        {path: "/register", element: <Register />},
        {path: "/dashboard", element: <Dashboard />}
    ]);

    return(
        <div>
    <BrowserRouter>
        <Paths />
    </BrowserRouter>
    </div>
   
    );
};

export default Main;