// // Var, Let, Const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init variable
// var greeting; //Sets it to 'undefined'
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// //Variables can include letters, numbers, underscore ___, and $ dollar sign
// //Variables cannot start with a number

// //var 1name = 'John'; //throws "Uncaught Syntax Error" in console

// //var _name = 'John'; // underscored variables are used for private variables

// //Multi word variables

// var firstName = 'John'; // Camel Case
// var first_name = 'Sarah'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname = 'Larry' // Lowercased is not used normally

// LET

// let name;
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST

// const name = 'John';
// console.log(name);
// name = 'Sarah'; // Uncaught Type Error: Assignment to constant variable
// const greeting; // Uncaught Syntax Error: Missing initializer in const declaration

const person = {
    name: 'John',
    age: 30
}

person.name = 'Sarah';
person.age = 32;

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);

/* 
With CONST, you can change the variables inside the object to whatever you want,
but you cannot change that "person" to anything else, it has to stay an object
*/
