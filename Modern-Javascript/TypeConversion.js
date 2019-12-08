let val;

//Number to string
val = String(5);
val = String(4+4);

//Boolean to a string
val = String(true);

//Date to a strong
val = String(new Date());

//Array to a string
val = String([1, 2, 3, 4]);

//toString()
val = (5).toString();
val = (true).toString();

//String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); //Returns Not a Number (NaN)
val = Number([1, 2, 3]); //Returns NaN

val = parseInt('100');
val = parseInt('100.50');
val = parseFloat('100.50');

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum); //Outputs 11
console.log(typeof sum); //Outputs number

const val3 = String(5);
const val4 = 6;
const sum2 = val3 + val4;

console.log(sum2);// Outputs 56
console.log(typeof sum2); //Outputs string

/*
  When sum2 adds val3 and val4, it takes the string in val3 and converts the number
  in val4 to a string, then concatinates them into 56

  This is an example of Type Coercion
*/

