console.log(Math.PI);

console.log(Math.random());

console.log(Math.floor(5.6));

console.log(Math.ceil(5.6));
console.log(Math.round(5.4));
console.log(Math.round(5.6));

let dice = Math.ceil(Math.random() * 6);
console.log(dice);

let dicecube = Math.floor(Math.random() * 6) + 1;
console.log(dicecube);

let today = new Date();
console.log(today);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getMonth() + 1);

let current = new Date();
let date = current.getDate() + "/" +
    (current.getMonth() + 1) + "/" +
    current.getFullYear();
console.log(date);

let present = new Date();
let result = present.getDate() + "-" + (present.getMonth() + 1) + "-"
    + present. getFullYear();
console.log(result);

let birthyear = 2001;
let currentyear = new Date().getFullYear();
console.log(currentyear - birthyear);

let number = Math.random()
console.log(Math.floor(number * 9 + 1));
