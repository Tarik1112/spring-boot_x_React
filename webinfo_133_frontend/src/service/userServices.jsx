import  axios  from "axios";

export const RegisterAPI = async (data) => {
    try{
        let registerUser = await axios.post("http://localhost:8081/webinfo/api/user/register", data);
        console.log("servis", registerUser);
        return registerUser;
    }catch(err){
        console.log(err);
    }
};

export const LoginAPI = async (data) => {
    try{
        let loginUser = await axios.post("http://localhost:8081/webinfo/api/user/login", data);
        console.log("servis", loginUser);
        return loginUser;
    }catch(err){
        console.log(err)
    }
    
};

export const updateUserAPI = async (data , id) => {
    try{
        let updateUser = await axios.put(`http://localhost:8081/webinfo/api/user/update_user/${id}`, data);
        console.log("update", updateUser);
        return updateUser;
    }catch(err){
        console.log(err);
    }
}