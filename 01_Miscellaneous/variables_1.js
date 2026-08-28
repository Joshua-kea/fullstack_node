// Node REPL (Read-evaluate-print loop)

// Type Coercion

// Rule: Use strict quality checks: === or !==

// node <filename>

// Rule: Use const whenver possible, otherwise use let

// console.log("navn");

const myFavoriteNumber = 213;

// const means that it is constant in the assignment


// JavaScript object, fordi JSON ikke kan have kommentarer og det skal være "name": "Amin"
const person = {
    // key-value pair
    name: "Amin"
};

person.age = 123;

// delete person.name;

console.log(person);

const things = ["mouse"];

things.push("car");

// things.pop("");

// Use comma in console.log 
// because if we use + (concatenate) we might coerce and change the values

console.log(things[0], things[1]);


// Data types in JavaScript
// String, Boolean, Number, BigInt, null, undefined, Object, Symbol

const greetingOne = "Hello";

const greetingTwo = '"Hello"';

const greetingThree = `"Hello" '${person.name}'


linje`;

// Benefit: Multi-line

console.log(greetingOne);
console.log(greetingTwo);
console.log(greetingThree);