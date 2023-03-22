/**
 * 
 ** array1.conact(array2, array3, ....., arrayn)
 * 
 *? The concat() method is used to merge two or more arrays. 
 *? This method does not change the existing arrays, but instead returns a new array.
 * 
 * */ 

//concatinating 2 arrays
console.log("concatinating 2 arrays");
let alphabet1 = ['a', 'b', 'c', 'd',];
let alphabet2 = ['e', 'f', 'g', 'h'];
let alphabets = alphabet1.concat(alphabet2);
console.log(alphabets);
// console.log(alphabet1.concat(alphabet2));
console.log();
//concatinating 3 arrays
console.log("concatinating 3 arrays");
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let numbers = num1.concat(num2, num3);
console.log(numbers);
console.log();
//concatinating nested array
console.log("nested array");
let nm1 = [[1], 2];
let nm2 = [3, [4]];
let nm3 = nm1.concat(nm2);
console.log(nm3);

/**
 * 
 ** array.fill(value, startIndex, endIndex)
 * 
 *? The Javascript arr.fill() method is used to fill the array with a given static value. 
 *? The value can be used to fill the entire array or it can be used to fill a part of the array.
 * 
 * */

let animals = ["Deer", "Elephant", "tiger", "Dog", "cat"];
// animals.fill("lion");
console.log(animals);

animals.fill("pig", 1, 2);
console.log(animals);

animals.fill('pig', 1, 4);
console.log(animals);

console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

//Using fill() to fill an empty array
const tempGirls = Array(5).fill("girl", 0);
console.log(tempGirls);

/**
 * 
 * * array.inculdes(searchElement, startIndex)
 * 
 * ? The Javascript array.includes() method is used to know whether a particular element is present in the array or not
 * 
 * */ 

let array = [1, 2, 3, 4, 5];
console.log(array.includes(3));
console.log(array.includes(3, 3));
//Start index is equal to the array index
let pm = ['Modi', 'Singh', 'Vajpeyi'];
console.log(pm.includes("Singh", 1));
//Index is greater than the array length
console.log(array.includes(3, 10));