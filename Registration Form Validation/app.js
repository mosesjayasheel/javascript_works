const form = document.getElementById("registrationform")

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let text = document.getElementById("text").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let number = document.getElementById("number").value.trim();

    let nameregex = /^[A-Za-z]+$/;
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let numregex = /^[0-9]{10}$/;
    let passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!nameregex.test(text)) {
        document.getElementById("texterror").innerText = "Enter Valid Username";
        document.getElementById("texterror").style.color = "red";
    }else {
        document.getElementById("texterror").innerText = "";
    }

    if(!emailregex.test(email)) {
        document.getElementById("emailerror").innerText = "Enter Valid E-mail";
        document.getElementById("emailerror").style.color = "red";
    } else {
        document.getElementById("emailerror").innerText = "";
    }

    if(!numregex.test(number)) {
        document.getElementById("numbererror").innerText = "Enter Number"
        document.getElementById("numbererror").style.color = "red";
    } else {
        document.getElementById("numbererror").innerText = "";
    }

    if(!passregex.test(password)) {
        document.getElementById("passworderror").innerText = "Enter minimum 1 Uppercase, Lowercase, Number and special character."
        document.getElementById("passworderror").style.color = "red";
    } else {
        document.getElementById("passworderror").innerText = "";
    }
})