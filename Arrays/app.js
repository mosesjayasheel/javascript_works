let fruits = ["Apple", "Banana", "Oranges", "Kiwi"];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits[4]);

fruits.push("Mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("Avacado");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(0, 0);
console.log(fruits);

fruits.splice(1, 0);
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1, 2); // 2 remove 2 items starting from index 1
console.log(fruits);

fruits.splice(1, 3); // 3 remove 3 items starting from index 1 
console.log(fruits);

fruits.splice(0, 1);
console.log(fruits);

fruits.splice(0, 2); // 2 remove 2 items starting from index 0
console.log(fruits);


let items = ["sweets", "chocolates", "ice-cream", "pastries"];
console.log(items);

items.splice(1, 0, "cookies"); // add "cookies" at index 1 without removing any item
console.log(items);

items.splice(2, 0, "cakes"); // add "cakes" at index 2, without removing any item
console.log(items);

items.splice(2, 3, "brownies"); // removes 3 items from index 2 and replaced "ice-cream" with "brownies" at index 2
console.log(items);