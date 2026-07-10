const person1 = {
    name: "harinath"
}

const person2 = {
    name: "kalyan"
}

function greet() {
    console.log("Good Morning " + this.name);
}

greet.call(person1);


const employee = {
    name: "Moses"
}

function introduce(city) {
    console.log(this.name + " is from " + city);
}

// introduce.apply(employee, ["Gdv"])

let info = ["Gdv"]

introduce.apply(employee, info)


const emp1 = {
name: "Hari",
role: "Developer"
};

const emp2 = {
name: "Rahul",
role: "Tester"
};

const emp3 = {
name: "Kiran",
role: "Manager"
};

function display() {
    console.log(this.name + " is a " + this.role);
}
display.call(emp1)
display.apply(emp2)

const displaylater = display.bind(emp3)
displaylater()