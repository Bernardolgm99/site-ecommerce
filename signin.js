document.getElementById("btn_login").addEventListener("click",singin2)

function singin2() {
    let email = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    if (email == "example@gmail.com" && password == "1234") {
        window.open("perfil.html", "_self") 
    }
    else{
        console.log("Error")
        alert("User or password are incorrect!")
    }
}
