import { useState } from "react";
import '../user/login.css'
import {LoginAPI} from "../../service/userServices"
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () =>{
    const navigate = useNavigate();

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");


    const login =  () =>{
        LoginAPI(  {
            "password": passwordReg,
            "username": usernameReg
        });
        console.log(JSON.stringify({
        "password": passwordReg,
        "username": usernameReg},null,2))
        navigate('/dashboard');
    };

    return(
       <div className="mainContent" onSubmit={login}>
        <div className="mainContainer d-flex justify-content-center align-items-center w-100">
        <form className="rounded p-4 p-sm-3">
            <Form.Group className="mb-3">
                <Form.Label className="label">Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" onChange={(e) => setUsernameReg(e.target.value)}/>                
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="label">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPasswordReg(e.target.value)} />
            </Form.Group>
            <button className="btn btn-primary" type="submit">Login</button>

            <p className="mt-3">You don't have an account? <a href="/register">Sign up</a></p>
            <p className="mt-3">Enter as <a href="/dashboard">Guest</a></p>

        </form>
        </div> 
       </div>
    );
}

export default Login;
