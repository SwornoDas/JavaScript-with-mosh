//This is my first comment in javascript
console.log("Hello World");

let name = 'Sworno';
console.log(name);

// Cannot be a reserved keyword like C Language keywords
// Cannot start with a number e.g. 1name
// Should be meaningful e.g. name, age, isActive
// Cannot contain a space or hyphen e.g.
// case-sensitive
let First_name;

let firstName = 'Sworno';
let lastName ='Das';

let interestRate = 0.5;
interestRate = 1;
console.log(interestRate);
// If you want to reassign a veriable than use let
// if you don't want to resssign a veriable than use const
const interestRate2 = 0.2;
console.log(interestRate2);

// Primitive types/Value types
// 1. String
let myname = 'Sworno';
// 2. Number
let age = 30;
// 3. Boolean
let isActive = true;
// 4. Undefined
let newName = undefined;
// 5. Null
let newlastName = null;

typeof myname; // string
typeof age; // number   
typeof isActive; // boolean
typeof newName; // undefined
typeof newlastName; // null 
console.log(typeof myname);
console.log(typeof age);
console.log(typeof isActive);
console.log(typeof newName);
console.log(typeof newlastName);


// Reference types
// 1. Object 2. Array 3. Function
// let my_name ='Sworno';
// let my_age = 19;
let person = {
    name: 'Sworno',
    age: 19
};
// Dot notation
person.name = 'John';
// Bracket Notation
// let selection = 'name';
// person[selection] = 'Doe';
person['name'] = 'Riya';
console.log(person);

// Array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = '1';
// console.log(selectedColors[0]);
console.log(selectedColors);

typeof selectedColors; // object
console.log(typeof selectedColors);
console.log(selectedColors.length);

// Function
// Performing a task
//function greet(name, lastName = 'Das')
function greet(name, lastName) {
    console.log('Hello World');
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Sworno', 'Das');
// greet('Marry', 'Smith');

// Calculate a value
function square(number) {
    return number * number;
}
// let number = square(2);
// console.log(number);
console.log(square(2));
