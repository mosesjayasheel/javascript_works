const form = document.getElementById("loginform");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let usernameregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!usernameregex.test(username)) {
        document.getElementById("usererror").innerText = "Enter Valid Username";
        document.getElementById("usererror").style.color = "red";

    } else {
        document.getElementById("usererror").innerText = "";
    }

    if (!passwordregex.test(password)) {
        document.getElementById("passerror").innerText = "Wrong Password";
        document.getElementById("passerror").style.color = "red";
    } else {
        document.getElementById("passerror").innerText = "";
    }
})