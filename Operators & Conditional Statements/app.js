// Arithmetic Operators

let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);

let c = 20;
let d = 4;
var e = c/d;
    e = c+d;
    e = c-d;
    e = c*d;
    e = c%d;

console.log(e);

// Comparison Operators

let age = 24;
console.log(age>=18);

console.log(10>20);
console.log(23==24);
console.log(23!==24);
console.log(10 == 10);
console.log(10 == "10");
console.log("10" == "10");
console.log(100 === 100);
console.log(100 === "100");
console.log("100" === "100");

// Grade Calculator

let marks = 88;
if (marks >= 90) {
    console.log("A Grade");
}
else if (marks >= 75) {
    console.log("B Grade");
}
else if (marks >= 60) {
    console.log("C Grade");
}
else if (marks >= 50) {
    console.log("D Grade");
}
else {
    console.log("Failed");
}

// Vote Eligibility

let voterage = prompt("Enter your age:");
if (voterage >= 18) {
    console.log("Elogible to Vote");
}
else {
    console.log("Not Eligible to Vote");
}

// ATM Balance Checker

let balance = 10000;
let withdrawl = prompt("Enter the amount to withdraw:");
if (withdrawl <= balance) {
    console.log("Transaction Successful");
}
else {
    console.log("Transaction Failed");
}