//Normal function
let show = function () {
    console.log('Anonymous function');
};
show();
let show1 = () => console.log('Anonymous function');
console.log();

//initializing Arrow Function
// one parameter and single return statement
const square = (x) => x * x;
//calling arrow function
console.log(square(5));
console.log();

//Multiple parameter and a single return expression
const sumOfTwoNumbers = (x, y) => x + y;

//Multiple statements in function expression
const multi = (x, y) => {
    console.log(`Multiplying ${x} and ${y}`);
    return x * y;
}
let Multiplication = multi(2, 5);
console.log("Multiple statement arrow function", Multiplication);


/**
 *? Study Understanding JavaScript Pass-By-Value 
 *? Study recursive function 
 * 
 * */ 