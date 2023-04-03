/**

*? JavaScript constructor functions

**  a constructor function is a regular function with the following convention:
  ** The name of a constructor function starts with a capital letter like Person, Document, etc.
  ** A constructor function should be called only with the new operator.

*/

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//To create a new instance of the Person, you use the new operator:
let person = new Person('John', 'Doe');

/**
** Create a new empty object and assign it to the this variable.
** Assign the arguments 'John' and 'Doe' to the firstName and lastName properties of the object.
** Return the this value.
*/

//the constructor function Person allows you to create multiple similar objects.
let person1 = new Person('Jane', 'Doe')
console.log(person1);
let person2 = new Person('James', 'Smith')
console.log(person2);
console.log();
/**
** An object may have methods that manipulate its data.
** To add a method to an object created via the constructor function, you can use the this keyword.
*/

function Person1(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person3 = new Person1("John", "Doe");
console.log(person3.getFullName());

/**
** The problem with the constructor function is that when you create multiple instances of the Person, the this.getFullName() is duplicated in every instance, which is not memory efficient.

** To resolve this, you can use the prototype so that all instances of a custom type can share the same methods.
*/

/**
 *? Returning from constructor functions 
 * 
 ** a constructor function implicitly returns this that set to the newly created object.
 *
 *? if it has a return statement
 *
 ** If return is called with an object, the constructor function returns that object instead of this.
 ** If return is called with a value other than an object, it is ignored.
 *  
 * */

/**
 *? Calling a constructor function without the new keyword 
 * 
 ** let person4 = Person1('John','Doe');
 *
 ** the Person just executes like a regular function
 ** the this inside the Person function doesn’t bind to the person variable but the global object.
 * 
 * */