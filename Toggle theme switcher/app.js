const togglebtn = document.getElementById("togglebtn");
    togglebtn.addEventListener("change", function() {

        if(togglebtn.checked) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    });