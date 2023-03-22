//String Conversion
let val = true;
console.log(typeof (val));

convert = String(val);
console.log(typeof (convert));

/*
Numeric conversion
It required when we want to read a numeric value from a string based source like "text form"
*/

console.log();
console.log("Numeric Conversion");
console.log("6" / '2');

let str = '123';
console.log(typeof (str));
let num = Number(str);
console.log(typeof (num));

//If the string is not a valid number, the result of such a conversion is NaN
let age = Number("an arbitrary string instead of a number");
console.log(age);