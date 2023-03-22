//initializing Arrow Function

// one parameter and single return statement
const square = (x) => x * x;

//Multiple parameter and a single return expression
const sumOfTwoNumbers = (x, y) => x + y;

//Multiple statements in function expression
const multi = (x, y) => {
    console.log(`Multiplying ${x} and ${y}`);
    return x * y;
}

//calling arrow function
let output = square(5);
console.log(output);

let Multiplication = multi(2, 5);
console.log(Multiplication);