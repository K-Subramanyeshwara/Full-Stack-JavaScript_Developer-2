//== and ===

let a = 10;
let b = 10;
let c = '10';

console.log(a == b);

//== it compares values not the data type and JavaScript convert's the string into value before comparision 
console.log(a == c);

//=== strict equal opeartor is used and JavaScript dosen't convert the string to value before comparision 
console.log(a === c);