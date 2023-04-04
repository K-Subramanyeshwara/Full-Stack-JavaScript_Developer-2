// No need to specify the data type for parameters in JavaScript function definitions
// When we are passing parameters, value will be assigned from left to right
// Default parameters must come from right to left

function sub(x, y = 10) {
    return x - y;
}
console.log("Default parameter:",sub(12));
//default parameter will be overriden if we provide value to default parameter 
console.log("Default parameter overrriden:",sub(22,12));
console.log();


// Storing functions in variables. In this we can have two ways to execute the same function
function add(val1, val2) {
    return val1 + val2;
}
let sum = add;
let result = add(10, 20);
console.log("Calling a function through direct method:", result);
let result1 = sum(20, 29);
console.log("Calling function through variable declaration method:", result1);
console.log();


//Passing a function to another function
function add(a,b) {
    return a + b;
}
function avaerage(a, b, c) {
    return c = a + b / 2;
}
//function add is paased as argument to another function
let results = avaerage(10, 20, add);
console.log("Average of 2 numbers", results);
console.log();


//anonymous function - function without a name
/*
(function () {
   //...
});
*/

//anonymous function is not accessible after intial creation. therefore you need to assign it to the vaiable
let greet = function () {
    console.log("Learning anonymous function!");
}
//anonymous function without parameter
greet()
console.log();
//anonymous function with parameter
let greet1 = function (platform) {
    console.log("Welcome to anonymous ", platform);
};
greet1("Functions!");
console.log();


//self executing anonymous function
(function () {
    console.log("Self executing function!");
})();