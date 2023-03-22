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


for (x in car) {
    console.log(x);
}

// Study about setters