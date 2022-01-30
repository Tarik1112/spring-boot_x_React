import { useState } from "react";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import Dashboard from "../components/Dashboard"
import Users from "../components/admin/Users"
import News from "./admin/News";
import Comments from "./admin/Comments";
import { BrowserRouter,Redirect ,Route, Routes, Link, useRoutes } from "react-router-dom";

const Main = () =>{

    const Paths = () => useRoutes([
        {path: "/", element: <Login />},
        {path: "/login", element: <Login />},
        {path: "/register", element: <Register />},
        {path: "/dashboard", element: <Dashboard />},
        {path: "/users", element: <Users />},
        {path: "/news", element: <News />},
        {path: "/comments", element: <Comments />},
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