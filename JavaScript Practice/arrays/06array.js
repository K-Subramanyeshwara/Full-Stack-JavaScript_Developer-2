/**
 * 
 ** array.pop() 
 * 
 *? The JavaScript Array pop() Method is used to remove the last element of the array
 *? It also returns the removed element.
 *? This function decreases the length of the array.
 *? f the array is empty, then this function returns undefined.
 * 
 * */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let popped = numbers.pop();
console.log(popped);
console.log(numbers);

/**
 * 
 ** push(element0)
 ** push(element0, element1)
 ** push(element0, element1, ...... ,elementN) 
 * 
 *? The JavaScript Array push() Method is used to add one or more values to the end of the array.
 *? This method changes the length of the array by the number of elements added to the array. 
 *? element : The element(s) to add to the end of the array.
 *
 *? Return value: This method returns the new length of the array after inserting the arguments into the array. 
 * 
 * */

let animals = ['pigs', 'goats', 'sheep'];
let count = animals.push('cows');
console.log(animals);
console.log(count);

animals.push('chickens', 'cats', 'dogs');
console.log(animals);

const vegetables = ["parsnip", "potato"];
const moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
vegetables.push(... moreVegs);

console.log(vegetables);

/**
 *
 ** array.shift() 
 * 
 *? The shift() method removes the first element from an array and returns that removed element.
 *? This method changes the length of the array.
 *? If the array is empty then this function returns undefined.
 * 
 * */

console.log(); 

let array = ['asas', 2, 3, 4, 5, 6, 7, 8, 9];
let shft = array.shift()
console.log("Removed : ",shft);
console.log(array);
console.log();

/**
 * 
 ** unshift(element0)
 ** unshift(element0, element1)
 ** unshift(element0, element1, … , elementN) 
 * 
 *? element : The elements to add to the front of the array
 *? This function returns the new length of the array after inserting the arguments at the beginning of the array. 
 * 
 * */

let array1 = [1, 2, 3, 4];
array1.unshift(8, 9);
array1.unshift(7);
array1.unshift(6);
array1.unshift(5);
console.log(array1);

