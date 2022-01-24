export const RegisterAPI = async (data) => {
    await fetch("http://localhost:8081/webinfo/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data, null, 2),
    }).then(response => {
        if(response.status === 200){
            alert("Korisnički račun uspješno kreiran");

        }else{
            alert("Email ili telefon već postoji")
        }
        return response.json()
    }).then((data)=>console.log(data));
};
