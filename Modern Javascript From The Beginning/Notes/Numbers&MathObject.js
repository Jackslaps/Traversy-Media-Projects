const num1 = 100;
const num2 = 50;
let val;

//Simple Math with numbers
val = num1 + num2; // 150
val = num1 * num2; // 5000
val = num1 - num2; // 50
val = num1 / num2; // 2
val = num1 % num2; // 0

// Math Object

val = Math.PI; // Calculates pi
val = Math.E; // Euler's Number
val = Math.round(2.4); // 4
val = Math.round(2.8); // 3
val = Math.ceil(2.4); // 3
val = Math.floor(2.4); // 4
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3
val = Math.pow(8, 2); // 64
val = Math.min(2, 33, 4, 1, 55, 6, 3); // 1
val = Math.max(2, 33, 4, 1, 55, 6, 3); // 55
val = Math.random(); // Gives a random decimal number less than 1
val = Math.random() * 20; // Gives a random decimal number between 0 and 20

val = Math.floor(Math.random() * 20 + 1); // Gives a random number between 1 and 20

console.log(val);