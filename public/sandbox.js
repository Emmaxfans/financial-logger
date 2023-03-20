"use strict";
const financialData = 'input-data';
console.log(financialData);
const recievedData = document.querySelectorAll('input');
console.log(recievedData);
recievedData.forEach(input => {
    console.log(input);
});
// numbers and strings
const firstnumber = 7;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7));
// ARRAY
let names = ['bola', 'marie', 'lola', true];
names.push('grace');
let numbers = [3, 5, 7, 8];
numbers.push(20);
// ARRAY OF NUMBERS AND STRING
let mixed = ['dola', 6, 'funmi', 'ope', 4];
// let newNumbers = ['gideon', 'sola', 6, 7, 8];
mixed.push('gideon', 'sola', 6, 7, 8);
let personalData = {
    name: 'fola',
    age: 20,
    skill: 'footballer'
};
personalData.name = 'shayo';
personalData.age = 25;
// OVERRIDDING VARIABLES
personalData = {
    name: 'ola',
    age: 50,
    skill: 'fighter'
};
let character;
let age;
let Isloggin;
age = 45;
character = 'tolu';
Isloggin = true;
// UNION TYPE
let multiples = [];
multiples.push('ayobami');
multiples.push(20);
multiples.push(false);
console.log(multiples);
// UNION OF DYNAMIC TYPE (ANY)
let multiples1 = [];
multiples1.push('tayo', 'ade');
multiples1.push(30);
multiples1.push(true);
console.log(multiples1);
// AS AN OBJECT
let multiples2;
multiples2 = {
    name: 'ade',
    age: 29,
    skill: false,
};
console.log(multiples2);
// let value: Function;
const add = (a, b, c) => {
    console.log(a + b + c);
};
add(20, 40, 30);
const minus = (a, b) => {
    return a + b;
};
let result = minus(50, 20);
const logdetails = (uid, items) => {
    console.log(`${items} has a uid ${uid}`);
};
const details1 = (user) => {
    console.log(`hi welcome back ${user.name} with ${user.uid}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let nameAge;
nameAge = (user) => {
    console.log(`my name is ${user.name} and i am ${user.name} old`);
};
