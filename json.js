// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('My name ' + this.name);
//     };
// }

// User.prototype.exit = function(name) {
//     console.log("Пользователь " + this.name + ' ушёл');
// };

// let ivan = new User('Ivan', 25),
//     sasha = new User('Sasha', 23);

// console.log(ivan);
// console.log(sasha);

// ivan.exit();

// let user = {
//     name: "Josh"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Shon']));

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(5));
// console.log(double(10));

// let age = document.getElementById('age');
// function showUser(surname, name) {
// alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
// // call.showUser(age, 'name', 'nadf');

// showUser.call(age, 'Smit', 'Jon');

function calc(a, b = 2) {
    //b = b || 2;
    console.log(a * b);
}

calc(2, 5);
calc(6);

class Father {
    constructor(height, width = 75, name = 'Alex') {
        this.height = height;
        this.width = width;
        this.name = name;
    }

    calcArea() {
        return this.width * this.height;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

const square = new Father(4);

console.log(square.calcArea());
square.sayName();
