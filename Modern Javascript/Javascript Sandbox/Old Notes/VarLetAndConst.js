//var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// Initialize a variable
// var greeting;
// console.log(greeting); //returns undefined
// greeting = 'Hello';
// console.log(greeting); //returns Hello

// Variables can include letters, numbers, _, and $
// Variables cannot start with a number

// var 1name = 'John'; //returns syntax error

// var $name = 'John'; //returns John

/* 

Dollar sign ( $ ) is only recommended when using Jquery and are selecting things from the DOM, that uses a $ globally

*/

// var _name = 'John'; //returns John

/*

Underscore ( _ ) is recommended when using private variables, which is used in frameworks

*/

// Multi word variables

// var firstName = 'John'; // Camel case -> Use for regular variables
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case -> Used for ES6 Classes
// var firstname; // All underscore is not used

// LET

/*

Let works exactly like Var, but allows for block level scoping

*/

// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
// const name = 'John';
// console.log(name);
// Cannot reassign value to name
// name = 'Sara';

/* 

You must assign a value to const, or an error will pop up saying missing initializer

*/

// const greeting;

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = '32';

console.log(person);

/*

In an object, we cannot reassign 'person' to a different value, but because it is an object, the values inside the object are able to change their values. 

The same goes for arrays, the const has to be an array always, but what is in the array can change freely.

*/

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);


