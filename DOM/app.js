// let heading = document.getElementById("title")
// let heading = document.querySelector(".Title")

// heading.innerText = "Document Object Model"
// heading.style.color = "red"
// heading.style.backgroundColor = "black"


// let para = document.querySelectorAll("p");

// console.log(para[1]);

let para = document.querySelector("#para");

function DynamicUpdate() {
    para.innerText = "Document Object Model"
    para.style.color = "red"
    para.style.backgroundColor = "black"
}

for(let number = 0; number<=5; number++){
    console.log(number);
}

let number = document.getElementById("number")
number.