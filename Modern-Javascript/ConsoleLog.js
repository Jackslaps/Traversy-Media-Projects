//Various different ways to implement console.log

console.log('Hello world'); //String
console.log(123); //Numbers
console.log(true); //Boolean

//variable
let greeting = 'Hello';
console.log(greeting);

console.log([1, 2, 3, 4]); //Array
console.log({a:1, b:2}); //Object literal

console.table({a:3, b:4}); //Object literal but outputs a table

console.error('This is an error'); //Console error output
console.warn('This is a warning'); //Console warning output

console.time('Start here'); //Creates a timer for whatever outputs between here and timeEnd
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
console.timeEnd('End here'); //Ends timer, outputs time in milliseconds 

console.clear(); //Clears console of previous commands