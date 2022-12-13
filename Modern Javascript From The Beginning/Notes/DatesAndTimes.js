let val;

const today = new Date(); // Date is a reference type, which is an object
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today;
val = birthday;

val = today.getMonth(); // returns 11; month is 0-based
val = today.getDate();  // returns 12
val = today.getDay();   // returns 2; Tuesday
val = today.getFullYear(); // returns 2022
val = today.getHours(); // returns 9
val = today.getMinutes(); // returns 38
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // returns timestamp; The amount of seconds that have passed since 1/1/1970

birthday.setMonth(2); // returns and changes to March
birthday.setDate(12); // returns and changes to 12th
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);

console.log(val);