let toys = {
    rocket : "🚀",
    home : "🏠"
}

//string, number, boolean, bigint, null, undefine, symbol are not the objects

// for (x in toys) {
//     console.log(x);
// }

const space = { 
    rocket: "🚀",
    fuel: 49,
    purpose: {
        name: "Mars Mission"
    }
}

//even though we created object usning 'const' keyword we can change and uppend values
// In this basically the memory assigned is constant not the values inside the object
space.fuel = 99;
space["Year"] = 2023;
// console.log(space);

// Another way of declaring the object using constructor
const library = new Object();
library.bookCount = 999;
library.averageValue = 299;
library.redBookCount = 199;
library.famousBookName = "Some Book";
library.mostReadBook = "Random Book";
// console.log(library);


const powers = {
    fly: true,
    swim: false,
    walk: true,
    num: Math.random()
}

const power = Object.create(powers);
console.log(power);
console.log(power.fly);
console.log(Object.getPrototypeOf(power));

/**
 ** NOTE
 * 
 * Object.create() is used to inherit the other object properties
 * Object.create() throws all the inherited properties to prototype
 * 
 * When we create object using Object.create() it will give cleaner look and it will also give access to all the inherited properties
 * 
 * 
*/

