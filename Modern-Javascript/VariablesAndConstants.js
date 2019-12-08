//VAR, LET, CONST

var name = 'John Doe';
console.log(name); // Outputs 'John Doe'
name = 'Steve Smith';
console.log(name); // Outputs 'Steve Smith'

// Initialize variable
var greeting; // Variable initialized without a value, will output undefined
console.log(greeting); // Outputs undefined for now
greeting = 'Hello';
console.log(greeting); // Outputs 'Hello'

/*
  RULES AND CONVENTIONS:
  - Variable names can include: letters, numbers, _, or $
  - Variables cannot start with a number
      var 1name = 'Chris' will throw an error saying invalid token
  - $ is normally used for jQuery to select things from the DOM
  - _ is used in variables for private variables
*/

// Multi Word Variables
var firstName = 'John'; //Camel case
var first_name = 'Sarah'; //Underscore case
var FirstName = 'Tom'; //Pascal case

/*
  - Pascal case is good for object oriented programming when creating constructor functions
    or when creating a class
  - For regular variables use Camel case
*/

// LET
// LET looks identical to VAR but allows for better control during block level scoping
let name = 'John Doe';
console.log(name); //Outputs 'John Doe'
name = 'Steve Smith';
console.log(name); //Outputs 'Steve Smith'

// CONST 
// Stands for constant, values within this variable cannot be reassigned
const name = 'John';
console.log(name); // Outputs 'John'
name = 'Sarah'; // Cannot be reassigned, throws TypeError
const greeting; // Cannot be initialized, needs a value; Throws SyntaxError

// Const does allow for some editing of variables, like arrays and objects
const person = {
  name: 'John',
}
console.log(person); // Outputs object that shows name: 'John'

const person = {
  name: 'John',
  age: 30
}
console.log(person); // Outputs object that shows name: 'John' and age: 30

person.name = 'Sarah';
person.age = 25;
console.log(person); // Outputs objet that shows name: 'Sarah' and age: 25
/*
  The properties inside an object can change, the object itself cannot be reassigned
  to something else. The data inside that object will still be assigned to that object
*/

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Outputs [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers); // Outputs [1, 2, 3, 4, 5, 6]
/*
  The array 'numbers' can have the data inside be changed, but what cannot be done
  is to have 'numbers' equal to another array that has 6 in it. This will throw a
  TypeError if changed
*/

/*
  - Use Const unless the value is planned on being changed, to be initialized, or used in an
    iterator or a loop
  - Using const lets others know that the value cannot be reassigned as a new
    primitive value
*/