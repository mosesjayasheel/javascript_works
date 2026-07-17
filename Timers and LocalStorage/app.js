let button = document.getElementById("btn");
let message = document.getElementById("message");

button.addEventListener("click", function () {

    message.textContent = "Please Wait"
    // setTimeout(function() 
    let timer = setInterval(function () {
        message.textContent = "Welcome to Javascript"

        console.log(message.textContent = "Welcome to Javascript")
    }, 1000);

    setTimeout(function () {
        clearInterval(timer)
        console.log("stop");
    }, 3000);
});

// let count = 0;

// let time = setInterval(function() {
//     count++;
//     console.log(count);
//     if(count === 5) {
//         clearInterval(time)
//     }
// }, 3000);

let number = 10;

let timed = setInterval(function () {
    number--;
    console.log(number);
    if (number == 0) {
        clearInterval(timed);
        console.log("stopped");
    }
}, 5000);

localStorage.setItem("name", "Moses");
localStorage.getItem("name");

sessionStorage.setItem("name", "Jayasheel");
sessionStorage.getItem("name");

let input = document.getElementById("note");
let save = document.getElementById("save");

save.addEventListener("click", function () {
    localStorage.setItem("note", input.value)
    console.log(localStorage.getItem("note"))
})