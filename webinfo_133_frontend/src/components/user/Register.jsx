import { useState } from "react";
import Axios from "axios";
import { RegisterAPI } from "../../service/userServies";
const Register = () =>{

    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [confirmPasswordReg, setConfirmPasswordReg] = useState("");

    const register =  () =>{
        RegisterAPI(  {"confirm_password": confirmPasswordReg,
        "email": emailReg,
        "password": passwordReg,
        "username": usernameReg});
    };


    return(
        <div>
            <div>
                <h3>Unesite vas email: </h3>
                <input placeholder="Email" type="text" 
                    onChange={(e) => setEmailReg(e.target.value)}
                />
            </div>
            <div>
                <h3>Unesite zeljeni username: </h3>
                <input placeholder="Username" type="text"
                    onChange={(e) => setUsernameReg(e.target.value)}
                />
            </div>
            <div>
                <h3>Unesite vas password: </h3>
                <input placeholder="Password" type="password"
                    onChange={(e) => setPasswordReg(e.target.value)}
                />
            </div>
            <div>
                <h3>Potvrdite vas password: </h3>
                <input placeholder="Potvri password" type="password"
                    onChange={(e) => setConfirmPasswordReg(e.target.value)}
                />
            </div>
            <button type="submit" onClick={register}>
                Submit
            </button>
        </div>
        
    );
}

export default Register