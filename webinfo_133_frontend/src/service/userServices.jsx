export const RegisterAPI = async (data) => {
    await fetch("http://localhost:8081/webinfo/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data, null, 2),
    }).then(response => {
        if(response.status === 200){
            alert("Korisnički račun uspješno kreiran");

        }else{
            alert("Doslo je do greske!");
        }
        return response.json()
    }).then((data)=>console.log(data));
};

export const LoginAPI = async (data) => {
    await fetch("http://localhost:8081/webinfo/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data, null, 2),
    }).then(response => {
        if(response.status === 200){
            alert("Uspjesna prijava");
        }else{
            alert("Doslo je do greske!")
        }
        return response.json()
    }).then((data)=>console.log(data));
};