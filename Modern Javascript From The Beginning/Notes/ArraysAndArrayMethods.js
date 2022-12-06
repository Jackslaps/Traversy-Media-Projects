// Create some arrays

const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// Get array length
val = numbers.length; // returns 7

// Check if is array
val = Array.isArray(numbers); // returns true

//Get single value
val = numbers[3]; // returns 23, which is the 4th position because arrays are 0-based
vsl = numbers[0]; // returns 43

// Insert into array
numbers[2] = 100; // replaces 33 with 100

// Find index of value
val = numbers.indexOf(36) // returns 5

// Mutating arrays

numbers.push(250);      // adds 250 to the end of the array
numbers.unshift(120);   // adds 120 to the beginning of the array
numbers.pop();          // removes 250; removes the last value in the array
numbers.shift();        // removes 120; removes the first value in the array
numbers.splice(1,1)     // removes 56; (starting position, # of values to select to the right of position)
numbers.reverse();      // reverses the order of the array

// Concatenate array
val = numbers.concat(numbers2); // Puts both arrays together

// Sorting arrays

val = fruit.sort();     // Sorts in alphabetical order
val = numbers.sort()    // Initially sorts the array in order based on the first digit of the number (100, 23, 36, 43, 44... )

val = numbers.sort(function(a, b) { // This is the compare function
    return a - b;                   // Returns the array in numberical order
});

val = numbers.sort((a, b) => {      // Same compare function as before
    return b - a;                   // Returns the array in reverse numberical order
});

// Find

function under50(num) {
    return num < 50;
}

val = numbers.find(under50);        // Passes the function under50 as a condition to the find function, which finds 43 as the first number

console.log(numbers);
console.log(val);