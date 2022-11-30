// PRIMITIVE TYPES

// Strings
const name = 'John Doe';

// Number
const age = 45;

// Boolean
const hasKids = true;

// NULL
const car = null;

// Undefined
let test;

// Symbol
const sym = Symbol();

console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof hasKids);    // boolean
console.log(typeof car);        // object ***  
                        /* ***
                        The first implementation of JS, values were represented as a type tag and value with the type tag for objects being 0
                        and null was represented as the NULL pointer (0x00). This leads to the result of "object" on the typeof return value  
                        *** */
console.log(typeof test);       // undefined
console.log(typeof sym);        // symbol


// REFERENCE TYPES

// Array
const hobbies = ['movies', 'music', 'sports']

// Object Literal
const address = {
    city: 'Miami',
    state: 'FL'
}

// Date
const today = new Date();

console.log(typeof hobbies);    // object
console.log(typeof address);    // object
console.log(typeof today);      // object
console.log(today);             // Tue Jul 19 2022 20:40:24 GMT-0400 (Eastern Daylight Time)