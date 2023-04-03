//string, number, boolean, bigint, null, undefine, symbol are not the objects
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

const powers = {
    fly: true,
    swim: false,
    walk: true,
    num: Math.random()
}

/*
-- Object.create() is used to inherit the other object properties, 
-- Object.create() throws all the inherited properties to prototype
-- When we create object using Object.create() it will give cleaner look and it will also give access to all the inherited properties
*/ 
const comics = Object.create(powers); //
console.log(comics);

//provides only one value of the key
console.log(comics.fly);

//getPrototypeOf Provides entire object
console.log(Object.getPrototypeOf(comics));
console.log();

//getter and setters

const library = Object.create({}) //Initializing empty object

Object.defineProperty(library, 'book', {
    // name: "Random Book",
    // color: "Red",
    // price: 320
    get: () => {
        return "Random Book"
    }
})
console.log(library);
console.log(library.book);
console.log(Object.getPrototypeOf(library));

// let person = {
//     fullName: "K Subramanyeshwara"
// };

// Object.defineProperty(person, 'id', {
//     value: 1,
//     writable: true //allows you to change the value
// });

// console.log(person.id);
// person.id = 5;
// console.log(person.id);


// All objects are not loop through, to make it loop through we need to use enumerable
const car = {
    carName: "Tata"
};

Object.defineProperty(car, 'Price', {
    get: () =>1000000,
    enumerable: true
})

// Object.defineProperty(car, 'Price', {
//     get: () => {
//         value: 1000000
//     },
//     enumerable: true
// })


// for (x in car) {
//     console.log(x);
// }

// Study about setters
