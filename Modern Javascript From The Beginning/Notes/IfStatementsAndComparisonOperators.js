// if(something) {
//     do something
// } else {
//     do something else
// }

const id = 100;

// EQUAL TO
if(id == 100) {
    console.log('CORRECT')
} else {
    console.log('INCORRECT')
};

// NOT EQUAL TO
if (id != 101) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
};

// = assigns a value
// == is for comparing values
// === is for comparing values and types


// EQUAL TO VALUE AND TYPE
if(id === 100) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT')
};

// EQUAL TO VALUE AND TYPE
if(id !== 101) {
    console.log('CORRECT');
} else {
    console.log('INCORRECT')
};

// Test if undefined
if(typeof id !== 'undefined') {
    console.log(`The id is ${id}`);
} else {
    console.log('NO ID');
};

// GREATER OR LESS THAN
if(id > 200) {
    console.log('CORRECT')  
} else {
    console.log('INCORRECT')
};

// IF/ELSE STATEMENTS
const color = 'red';

if(color === 'yellow') {
    console.log('Color is yellow')
} else if(color === 'blue') {
    console.log('Color is blue')
} else {
    console.log('Color is neither yellow or blue')
};

// LOGICAL OPERATORS
const name = 'Steve';
const age = 17;

// AND &&
if(age > 0 && age <= 12) {
    console.log(`${name} is a child, age ${age}`);
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager, age ${age}`);
} else {
    console.log(`${name} is an adult, age ${age}`)
};

// OR ||
if(age < 16 || age > 65) {
    console.log(`${name} cannot run in race`);
} else {
    console.log(`${name} is eligible for race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT CURLY BRACES
if(id === 100)
    console.log('CORRECT without curly braces')
else
    console.log('INCORRECT without curly braces')


