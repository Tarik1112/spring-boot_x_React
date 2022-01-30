import { useState } from "react";
import Axios from "axios";
import {Button, Form} from 'react-bootstrap'
import {useNavigate} from "react-router-dom"
import { RegisterAPI } from "../../service/userServices";
const Register = () =>{
    const navigate = useNavigate();
    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [confirmPasswordReg, setConfirmPasswordReg] = useState("");

    const handleSubmit =  async(event) =>{
        event.preventDefault();
        const userRegister = await RegisterAPI(  {
            "confirm_password": confirmPasswordReg,
            "email": emailReg,
            "password": passwordReg,
            "username": usernameReg
        });
        console.log('userReg', userRegister);
        if(userRegister?.status === 200){
            navigate("/login");
        }else{
            alert("Doslo je do greske. Lozinke nisu identicne!");
        }
       
    };


    return(
        <div className="mainContent ">
        <div className="mainContainer d-flex justify-content-center align-items-center w-100">
        <form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label className="label">Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" onChange={(e) => setUsernameReg(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="label">Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmailReg(e.target.value)}/>   
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="label">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPasswordReg(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className="label">Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPasswordReg(e.target.value)}/>
            </Form.Group>

            <button className="btn btn-primary" type="submit" disabled={!usernameReg || !emailReg || !confirmPasswordReg || !passwordReg} >Register</button>

            <p className="mt-3">You have an account? <a href="/login">Sign in</a></p>
            <p className="mt-3">Enter as <a href="/dashboard">Guest</a></p>


        </form>
        </div> 
       </div>
       
    );
}

export default Register