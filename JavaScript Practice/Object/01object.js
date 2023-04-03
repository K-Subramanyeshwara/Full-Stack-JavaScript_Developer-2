//Creating aand initializing a object
let employeeDetails = {
    id: 101,
    firstName: "K",
    lastName: "Subramanyeshwara",
    role: "Intern",
    salary: 25000
};
console.log(employeeDetails);
console.log();


//creating empty object using Object keyword
// let user = {};  // "object literal" syntax
let emptyObject = new Object(); // "object constructor" syntax
emptyObject.id = 102;
emptyObject.firstName = "Ramya";
emptyObject.lastName = "Agin";
emptyObject.role = "Advocate";
emptyObject.salary = 150000;
console.log(emptyObject);
console.log();

//creating object using function constructors 
function playerScore(f,s,o,t) {
    this.four = f;
    this.six = s;
    this.ones = o;
    this.twos = t;
}

const virat =new playerScore(5, 8, 29, 12);
console.log(virat);
console.log();

//Accessing object value using dot(.) operator
console.log(emptyObject.id);
console.log(emptyObject.firstName);
console.log(emptyObject.lastName);
console.log();

//Accessing object value using array style - not recommended
console.log(employeeDetails['id']);
console.log(employeeDetails['firstName']);
console.log(employeeDetails['lastName']);
console.log();

//adding new value to a object using dot(.) operator
emptyObject.location = "Kerala";
console.log(emptyObject);
console.log();

//adding value to a object using array style - not recommended
employeeDetails['location'] = "Bengaluru";
console.log(employeeDetails);
console.log();

//updating a value using dot(.) operator and array style 
emptyObject.location = "Dubai";
console.log(emptyObject);
console.log();

//- not recommended
employeeDetails['location'] = "Mumbai";
console.log(employeeDetails);
console.log();


