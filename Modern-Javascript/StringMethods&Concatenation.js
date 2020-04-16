const firstName = 'William';
const lastName = 'Johnson';
const age = 32;
const str = 'Hello there my name is Chris'
const tags = 'web design, programming, web development'

let val; 

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = 'Chris';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + 'and I am ' + age;

// Escaping
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');

//Get last character
val = firstName.charAt(firstName.length - 1);

// Substring
val = firstName.substring(0, 4);

// Slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// Split
val = str.split(' ');
val = tags.split(",");

// Replace
val = str.replace('Chris', 'Brad');

// Include
val = str.includes('Hello');
val = str.includes('Foo');

console.log(val);