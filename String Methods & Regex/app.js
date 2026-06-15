// let email = "moses.jayasheel27@gmail.com";
// console.log(email.includes("@"));

let skills = "HTML,CSS,JS,Python";
console.log(skills.split(","));

let text = "My name is MosesJayasheel  ";
console.log(text.length);
console.log(text.replace("MosesJayasheel", "MosesJayasheel PrabhuKireet"));
console.log(text.trim(" "));
console.log(text.trim(" ").length);

let email = "moses.jayasheel27@gmail.com";
if(email.includes("@")) {
    console.log("Valid E-mail");
}
else {
    console.log("Invalid E-mail");
}

let password = "Pass1234";
if(password>=8){
    console.log("Strong password");
}
else {
    console.log("Weak Password");
}

let pattern1 = /^[0-9]+$/;
console.log(pattern1.test(2527));

let pattern2 = /^[A-Za-z]+$/;
console.log(pattern2.test("Moses"));

let username = /^[A-Za-z0-9]{5,}$/;
console.log(username.test("Moses2527"));