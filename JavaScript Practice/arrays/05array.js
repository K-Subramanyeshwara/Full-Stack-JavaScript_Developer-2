/**
 * 
 ** 
 * 
 *? The Javascript map() method creates an array by calling a specific function on every element of an parent array.
 *? The map() method is used to iterate over an array.
 *? The map() method calls a function on every element of the array.
 * 
 *TODO : https://www.geeksforgeeks.org/javascript-array-map-method/
 *TODO : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * */ 

let maths = [1, 4, 9, 16, 25];
console.log(maths.map(Math.sqrt));
//Original array will not be changed
console.log(maths);
console.log();

/**
 * 
 ** array.reverse() 
 * 
 *? it will reverse an array in place and returns the reference to the same array
 * 
 * */ 

console.log("Array Reverse");
let array = ['one', 'two', 'three', 'four', 'five'];
console.log(array);
array.reverse();
console.log(array);

let array1 = [1, 2, 3, 4, 5, 6, 7];
console.log(array1);
array1.reverse();
console.log(array1);
console.log();

/**
 * 
 ** array.sort(compareFunction)
 * 
 *? It will sort an array in an ascending order
 * 
 * */

console.log("Sorting \n");
let numbers = [7, 3, 5, 1, 9, 2, 8, 4, 6];
console.log("Without Sorting \n",numbers);
let sort1 = numbers.sort()
console.log("Ascending Sorting \n", sort1);
let sort2 = numbers.reverse(numbers.sort());
console.log("Descending Sorting \n",sort2);