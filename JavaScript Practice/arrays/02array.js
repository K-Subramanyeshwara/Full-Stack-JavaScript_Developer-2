/**
 * * array.slice(startIndedx, endIndex)
 * 
 * ? The Javascript arr.slice() method returns a new array containing a portion of the array on which it is implemented. 
 * ? The original remains unchanged.
 * */ 

let names = ["Meghana", "Karthik", "Anusha", "Suraj", "Nayana"];
console.log(names);

//slice allows you to get multiple values at the same time
console.log(names.slice(0, 3));

//slicing an array from 2nd position to the rest of the array
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(number.slice(2));

console.log();

//slice() with negative index
console.log(number.slice(-1));
console.log(number.slice(-4, -1));


/**
 ** splice(start, deleteCount, item1, item2, itemN) 
 *
 * ?The JavaScript Array splice() Method is used to modify the contents of an array by removing the existing elements and/or by adding new elements.
 * 
 * */ 

let months = ["January", "March", "April", "June"];
console.log(months);

console.log();

//adding an array element at perticular index and not removing anything
months.splice(1, 0, "February");
console.log(months);

console.log();

//adding an array element at perticular index and removing 1 element
months.splice(4, 1, "May");
console.log(months);

console.log();

//Remove 1 element at index 3
months.splice(3, 1);
console.log(months);

console.log();

//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
let birds = ["Eagle", "Duck", "Swans", "Raven", "Hummingbird"];
console.log(birds);
birds.splice(0, 2, "parrot", "anemone", "blue");
console.log(birds);

