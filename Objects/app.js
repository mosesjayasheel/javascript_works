// let student = {
//     name: "Moses",
//     greet: function() {
//         console.log("Welcome");
//     }
// }

// student.greet();

// let name = "Moses";

// function greet() {
//         console.log("Welcome " + name);

//     }

// greet();

let student = {
    name: "Moses",
    age: 20,
    state: "telangana"
}

// let {name, age} = student;

// console.log(name);
// console.log(age);

// let updatedstudent = {
//     ...student,
//     city: "Hyderabad"
// }

// console.log(updatedstudent);

// let { name, ...others } = student;
// console.log(others);

console.log(student.name);
console.log(student["state"]);

student.city = "Hyderabad";
console.log(student);

student.age = 22;
console.log(student);

delete student.state;
console.log(student);


let games = {
    name: "Cricket",
    players: 11,
    address: { place: "Stadium" }
    // play: function() {
    //     console.log("Playing ");
    // }
}

// games.play();

console.log(games.address.place);


let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
}

// product.processor = "i7";
// product.price = 45000;
// delete product.brand;
// console.log(product);

// let {price, brand} = product;
// console.log(name);
// console.log(price);
// console.log(brand);

let updatedproduct = {
    ...product,
    ram: "32gb",
    ssd: "512gb"
}
console.log(updatedproduct);

let {brand, ...others} = product;
console.log(others);


