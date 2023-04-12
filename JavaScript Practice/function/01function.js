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

//passing multiple values through multiple parameter
function multi(val1, val2) {
    let val3 = val1 * val2;
    console.log("Multiplication of 2 numbers are", val3);
}

multi(23,24);
multi(10, 12);

// No need to specify the data type for parameters in JavaScript function definitions
// When we are passing parameters, value will be assigned from left to right
// Default parameters value must come from right to left

function sub(x, y = 10) {
    return x - y;
}
console.log("Default parameter:",sub(12));
//default parameter will be overriden if we provide value to default parameter 
console.log("Default parameter overrriden:",sub(22,12));
console.log();

//returning a value
function multiplication(a, b, c) {
    let mul = a * b * c;
    return mul;
}
let mul = multiplication(2, 4, 7);
console.log("Sum of three numbers:",mul);

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