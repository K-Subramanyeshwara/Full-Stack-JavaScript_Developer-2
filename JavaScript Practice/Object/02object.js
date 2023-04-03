//In object function is called as method
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
//use function expression to define method and assign it to the greet property of the person object
person.greet = function () {
    console.log('Hello!');
}
//call greet method
person.greet();
console.log();

//another way of defining a function and assign it to an object like this
let person1 = {
    firstName: 'John',
    lastName: 'Doe'
};
//define the greet() method as a regular method.
function greet() {
    console.log('Hello, World!');
}
//assign the method name to the the greet property of the person object.
person1.greet = greet;
//call the greet() method.
person1.greet();
console.log();

//defining methods of an object using the object literal syntax
let person2 = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, Dhuniya!');
    }
};
person2.greet();

//ES6 way of defining method
let person3 = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log('Namaste, World!');
    }
};

person3.greet();
console.log();


//This value
//this value references the object that calls the method
let person4 = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person4.getFullName());
console.log();


