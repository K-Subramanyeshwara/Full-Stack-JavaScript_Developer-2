/**
 * 
 ** Array.isArray(value)
 * 
 *? The Javascript arr.isArray() method determines whether the value passed to this function is an array or not.
 *?  function returns true if the argument passed is an array else it returns false.
 * 
 *? value : This parameter holds the object that will be tested.
 * 
 * */

let arr = [1, 2, "Sujatha", "Krishna", "Sumanth"];
console.log(Array.isArray(arr));

console.log(Array.isArray([1, 3, 5]));

console.log(Array.isArray(new Array(5)));

console.log(Array.isArray('[]'));

console.log(Array.isArray([]));
console.log();

/**
 * 
 ** array.join(separator)
 * 
 *? The JavaScript Array join() Method is used to join the elements of an array into a string.
 *? The elements of the strings is separated by commas or a specified separator.
 * 
 * */

let elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join(''));

let a = [1, 2, 3, 4, 5, 6];
let b = a.join('|')
console.log(b);
    
/**
 ** lastIndexOf(searchElement)
 ** lastIndexOf(searchElement, fromIndex)
 * 
 *? The JavaScript Array lastIndexOf() Method is used to find the index of the last occurrence of the search element provided as the argument to the function.
 * 
 *? searchElement : This parameter holds the element whose index will be returned.
 *? fromIndex: This parameter is optional and it holds the starting point of the array, where to begin the search the default value is 0.
 * 
 * */

let names = ['gfg', 'cse', 'geeks', 'portal', 'geeks', 'gfg', 'cse', 'geeks', 'portal'];
a = names.lastIndexOf('gfg');
console.log(a);
b = names.lastIndexOf('geeks', 5);
console.log(b);
