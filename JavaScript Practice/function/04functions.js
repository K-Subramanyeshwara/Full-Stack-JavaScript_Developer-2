//Functions Built-in Properties like Arguments, Name and length used in javascript functions.

//arguments to check number of arguments passed onto a function - it returns object. 
//arguments provides an object which will display all arguments passed onto a function
function hello(msg,sd) {
    console.log(msg);
    console.log(arguments);
    console.log(arguments.length); // it will check the length = number of arguments sent
}

hello("Namaste");
hello(10, 12, 50, 'string')
console.log();

//name will you the name of the function - useful when we are dealing with dyanamic function 
//we may not know the name of the function when the function is created dyanamically
console.log(hello.name);
console.log(hello.length); // length is used to get the number of parameter is accepted by the function