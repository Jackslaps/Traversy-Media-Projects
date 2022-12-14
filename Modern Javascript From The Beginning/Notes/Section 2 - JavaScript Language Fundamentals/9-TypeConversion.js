let val;

//Number to String

val = 5;
    /*
    console.log(val);           => 5
    console.log(typeof val);    => number
    console.log(val.length);    => undefined
    */

val = String(5);
    /*
    console.log(val);           => '5'
    console.log(typeof val);    => string
    console.log(val.length);    => 1
    */

val = String(4+4);
    /*
    console.log(val);           => '8'
    console.log(typeof val);    => string
    console.log(val.length);    => 1
    */

// Boolean to String

val = String(true);
    /*
    console.log(val);           => 'true'
    console.log(typeof val);    => string
    console.log(val.length);    => 4
    */

val = String(new Date());
    /*
    console.log(val);           => 'Tue Jul 19 2022 20:50:13 GMT-0400 (Eastern Daylight Time)'
    console.log(typeof val);    => string
    console.log(val.length);    => 57
    */

// Array to String

val = String([1,2,3,4]);
    /*
    console.log(val);           => '1,2,3,4'
    console.log(typeof val);    => string
    console.log(val.length);    => 7
    */

// toString()

val = (5).toString();
    /*
    console.log(val);           => '5'
    console.log(typeof val);    => string
    console.log(val.length);    => 1
    */

val = (true).toString();
    /*
    console.log(val);           => 'true'
    console.log(typeof val);    => string
    console.log(val.length);    => 4
    */

// String to Number

val = 5;
    /*
    console.log(val);           => 5
    console.log(typeof val);    => number
    console.log(val.toFixed())  => 5
    */

val = Number('5');
    /*
    console.log(val);           => 5
    console.log(typeof val);    => number
    console.log(val.toFixed())  => 5
    */

val = Number(true);
    /*
    console.log(val);           => 1
    console.log(typeof val);    => number
    console.log(val.toFixed())  => 1
    */

val = Number(false);
    /*
    console.log(val);           => 0
    console.log(typeof val);    => number
    console.log(val.toFixed())  => 0
    */

val = Number(null);
    /*
    console.log(val);           => 0
    console.log(typeof val);    => number
    console.log(val.toFixed())  => 0
    */

val = Number('hello');
    /*
    console.log(val);           => NaN - Not A Number
    console.log(typeof val);    => number
    console.log(val.toFixed())  => NaN - Not A Number
    */

val = Number([1,2,3,4]);
    /*
    console.log(val);           => NaN - Not A Number
    console.log(typeof val);    => number
    console.log(val.toFixed())  => NaN - Not A Number
    */

val = parseInt('100');
    /*
    console.log(val);           => 100
    console.log(typeof val);    => number
    console.log(val.toFixed())  => 100
    */
   
val = parseInt('100.30');       // This will only parse Integers (whole numbers)
    /*
    console.log(val);           => 100
    console.log(typeof val);    => number
    console.log(val.toFixed())  => 100
    */

val = parseFloat('100.30');     // This will parse Integers and Decimals, output Decimal
    /*
    console.log(val);           => 100.3
    console.log(typeof val);    => number
    console.log(val.toFixed())  => 100.30
    */

// Output
console.log(val);
console.log(typeof val);
//console.log(val.length); // Works on Strings
console.log(val.toFixed(2)) // Only works on Numbers

// TYPE COERCION

// const val1 = 5;
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);           // 11
// console.log(typeof sum);    // number

// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);              // 56
// console.log(typeof sum);       // string

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);              // 56
console.log(typeof sum);       // number