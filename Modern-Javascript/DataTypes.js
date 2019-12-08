/*
  Primitive Data Types:
    Stored directly in he location the variable accesses
    Stored on the stack
    When being accessed, you access its actual value

    -Strings
    -Numbers
    -Booleans
    -Null (intentionally assigned empty value)
    -Undefined (no value assigned)
    -Symbols (ES6)
  
  Reference Data Types:
    Accessed by reference
    Objects that are stored on the heap
    A pointer to a location in memory

    -Arrays
    -Object Literals
    -Functions
    -Dates
*/

/*
  Javascript is a 'Dynamically Typed Language'
    Types are associated with values, not variables themselves
      The same variable can hold multiple types
      - A variable can be a string at one point and then assigned to be a number later
    We do not need to specify types
      - We dont need to specify int, float, char, etc.
    Most other languages are statically typed (Java, C#, C++)
      - There are supersets of JS and addons to allow static typing (TypeScript, Flow)
*/

//Primitive Types

const name = 'John Doe';
console.log(typeof name); //Outputs 'string'

const age = 45;
console.log(typeof age); //Outputs 'number'

const hasKids = true;
console.log(typeof hasKids); //Outputs 'boolean'

const car = null;
console.log(typeof car); //Outputs 'object'
  /*
    The first implementation of Javascript, values were represented as a type tag
    and a value with the type tag for /objects/ being 0; null was represented as
    the NULL pointer (0x00), and as a result null had 0 as a type tag, which is why
    it outputs as an object
  */

let test;
console.log(typeof test); //Outputs 'undefined'

const sym = Symbol();
console.log (typeof sym); //Outputs 'symbol'

//Reference Types

const hobbies = ['movies', 'music'];
console.log(typeof hobbies); //Outputs 'object'

const address = {
  city: 'Miami',
  state: 'FL'
}
console.log(typeof address); //Outputs 'object'

const today = new Date();
console.log(today); //Outputs the date
console.log(typeof today); //Outputs 'object'
