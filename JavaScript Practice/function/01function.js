/**
 *? What is Function?
 * 
 * Function is a grouping commenly or repeatedly done task together  
 * Set of statements that takes input, do some task and produces output
 * We can call the function instead of writing same code again and again
 * 
 *? Syantax
 * function functionName(parameters){
 *      function body
 *      ...
 *      ...
 * }
 * 
 *? Parameters
 * Parameters are specified while declaring a function
 * When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function
 * 
 *? Arguments 
 * Arguments are passed while calling a function
 *  
*/

// declaring a function without parameters
function greet() {
    console.log("Namaste..!");
}
//Calling a function
greet();

//passing values through parameters
function Hello(name) {
    console.log(`Hello ${name}, How are you doing?`);
}

Hello("K Subramanyeshwara") //Argument

function multi(val1, val2) {
    let val3 = val1 * val2;
    console.log("Multiplication of 2 numbers are", val3);
}

multi(23,24);
multi(10,12);

//Function expressions 
//functions can also be created by a function expression.
const square = function (number) {
  return number * number;
};
const x = square(4);
console.log(x);
console.log();

//function with n numbers of parameters
function addition(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
        
    }
    return sum;
}
let sumArray = [1, 2, 3, 4, 5];
let sumArrResult = addition(sumArray);
console.log(sumArrResult);
console.log();

//Accessing a parameters without passing it
//arguments is used to get the value without declaring a parameter
function add(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
let result = add(1, 2, 3, 4, 5, 6);
console.log(result);