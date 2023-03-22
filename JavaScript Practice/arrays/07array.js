/**
 ** String to an array
 *  
 * */

let fullName = 'Subramanyeshwara';
let array = fullName.split();
console.log(array);

array = fullName.split('');
console.log('\n', array);

/**
 ** forof loop
 * 
 *? The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
 *? Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList etc
 * 
 ** for (variable of iterable) {
 **  // ...}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * */


const socialSite = ["facebook", "Instagram", "Whatsapp", "Twitter", "Snapchat"]
for (const names of socialSite) {
    console.log(names);
}

//Another example
let fruits = ['Apple', 'Banana', 'Grapes', 'Cherry', 'Orange'];
let upperFruits = [];
for (let uf of fruits) {
    upperFruits.push(uf.toUpperCase());
}
console.log(upperFruits);

//iterating a string
let nam = 'K Subramanyeshwara';
for (let words of nam) {
    console.log(words);
}

/**
 ** Break and Continue
 * 
 * 
 * 
 * */ 