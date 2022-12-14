const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad'
const tags = 'web design,web development,programming'

let val;

val = firstName + lastName; // WilliamJohnson

// Concatenation 

val = firstName + ' ' + lastName; // William Johnson

// Appending

val = 'Brad ';
val += 'Traversy ';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping

// val = 'That's awesome, I cant wait'; => Error: Unexpected identifier. This is because the first ' on "That" makes the editor think the value is completed
val = "That's awesome, I can't wait"; // This works because the editor recognizes the " " as the value, not the ' in the sentence
val = 'That\'s awesome, I can\'t wait'; // This works, the \ before the ' is value escaping

// Length

val = firstName.length; // 7

// Concat

val = firstName.concat(' ', lastName); // William Johnson

// Change case

val = firstName.toUpperCase(); // WILLIAM
val = firstName.toLowerCase(); // william

val = firstName[0]; // W (the 0 index of value William)
val = firstName[2]; // l (the 2 index of value William)

// indexOf()

val = firstName.indexOf('l'); // 2; It looks for the first l in the array of 'William'
val = firstName.lastIndexOf('l') // 3; It looks for the last l in the array of 'William'

// charAt();

val = firstName.charAt('2'); // l; Same explanation for indexOf but returns the character
val = firstName.charAt(firstName.length - 1); // m; Firstname.length - 1 returns the last index of the array then charAt gives us the character in that index

// substring()

val = firstName.substring(0, 4); // Will; Starts from index 0 then gets the 4 characters starting from 0 onward

// slice()

val = firstName.slice(0, 4); // Will; Returns the same as substring but...
val = firstName.slice(-3); // iam; ... it has further functionality with different values used. This returned the last three values from William as the - makes it go backwards in the array

// split

val = str.split(' '); // ['Hello', 'there', 'my', 'name', 'is', 'Brad']; Returns an array of all the strings split by the spaces between words
val = tags.split(','); // ['web design', 'web development', 'programming']; Returns an array of all the strings split by the commas between them

// replace()

val = str.replace('Brad', 'Jack'); // Hello there my name is Jack

// includes()

val = str.includes('Hello'); // true
val = str.includes('Foo'); // false

console.log(val);