import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../NavBar";
import { updateUserAPI } from "../../service/userServices";
import {Modal, Button} from 'react-bootstrap';
import { RegisterAPI } from "../../service/userServices";
const Users = () => {
    const[users, setUsers] = useState([]);
    const[newUsername, setNewUsername] = useState();
    const[newPassword, setNewPassword] = useState();
    const[newEmail, setNewEmail] = useState();
    const[newConfPassword, setNewConfPassword] = useState();
    const[newStatus, setNewStatus] = useState();
    const[userId, setUserId] = useState();
    const[isOpenAdd, setIsOpenAdd] = useState(false);
    const[isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await axios.get("http://localhost:8081/webinfo/api/user/get_user");
            setUsers(res.data);
        })();
    }, []);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const handleClick =  (value) =>{
        setUserId(value);      
        setIsOpen(true);
    };

    const handleSubmit = async() =>{
        console.log(userId);
        const userUpdate = await updateUserAPI({
            "password": newPassword,
            "status": newStatus,
            "username": newUsername
        }, userId);
            console.log('userUpdate', userUpdate);
            if(userUpdate?.status === 200){
                console.log("Radi");
            }else{
                console.log("ne dira")
            }

    }

    const addNewUser = () => {
        setIsOpenAdd(true);
    }
    const hideModalAdd = () => {
        setIsOpenAdd(false);
    }
    const handleSubmitAdd = async() =>{
        const userRegister = await RegisterAPI(  {
            "confirm_password": newConfPassword,
            "email": newEmail,
            "password": newPassword,
            "username": newUsername
        });
        console.log('userReg', userRegister);
        if(userRegister?.status === 200){
            console.log("Radi");
            setIsOpenAdd(false);
        }else{
            alert("Doslo je do greske. Lozinke nisu identicne!");
        }
    }
    

    return (

        <div>
            <Navbar />
            <div className="w-100 m-3 p-2">
                <h2>Pregled korisnika</h2>
                <button className="btn btn-primary" onClick={addNewUser}>Dodaj novog korisnika</button>

                <Modal show={isOpenAdd} onHide={hideModalAdd}>
                            <Modal.Header closeButton>
                            <Modal.Title>Uredi korisnika</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p className="m-2 p-2">Unesite username: </p>
                                <input className="p-2" placeholder="Username" type="text" onChange={(e) => setNewUsername(e.target.value)}/>

                                <p className="m-2 p-2">Unesite email: </p>
                                <input className="p-2" placeholder="Email" type="email" onChange={(e) => setNewEmail(e.target.value)}/>

                                <p className="m-2 p-2">Unesite password: </p>
                                <input className="p-2" placeholder="Password" type="password" onChange={(e) => setNewPassword(e.target.value)}/>
                                
                                <p className="m-2 p-2">Potvrdite password: </p>
                                <input className="p-2" placeholder="Potvrdi password" type="password" onChange={(e) => setNewConfPassword(e.target.value)}/>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={hideModalAdd}>
                                Napusti
                            </Button>
                            <Button variant="primary" onClick={handleSubmitAdd}>
                                Spremi
                            </Button>
                            </Modal.Footer>
                        </Modal>

            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">Password</th>
                    <th scope="col">Status</th>
                    <th scope="col">Uredi</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                         <tr key={index}>
                         <th scope="row">{user.id.slice(0,7).toUpperCase()}</th>
                         <td>{user.username}</td>
                         <td>{user.password}</td>
                         <td>{user.status}</td>
                         <td>
                         <button type="button" class="btn btn-primary" onClick={() => handleClick(user.id)}>
                            Uredi
                        </button>
                        <Modal show={isOpen} onHide={hideModal}>
                            <Modal.Header closeButton>
                            <Modal.Title>Uredi korisnika</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p className="m-2 p-2">Novi username: </p>
                                <input className="p-2" placeholder="Username" type="text" onChange={(e) => setNewUsername(e.target.value)}/>

                                <p className="m-2 p-2">Novi password: </p>
                                <input className="p-2" placeholder="Password" type="password" onChange={(e) => setNewPassword(e.target.value)}/>

                                <p className="m-2 p-2">Novi status: </p>
                                <input className="p-2" placeholder="Status" type="number" onChange={(e) => setNewStatus(e.target.value)}/>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={hideModal}>
                                Napusti
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                                Spremi
                            </Button>
                            </Modal.Footer>
                        </Modal>
                            
                             
                        </td>
                         </tr>
                    ))}
                   
                    
                </tbody>
                </table>
        </div>
    );
}

export default Users;