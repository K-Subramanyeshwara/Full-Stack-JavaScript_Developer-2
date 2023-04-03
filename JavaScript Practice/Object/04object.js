//for in loop
let empDetails = {
    id: 101,
    firstName: "Ramya",
    lastName: "Agin",
    role: "Advocate",
    salary: 175000
};

//for in loop, provides all the keys
for (let x in empDetails) {
    console.log(x);
}
console.log();

//accessing values of the object
for (let y in empDetails) {
    console.log(empDetails[y]);
}
console.log();

//bertter way of accessing values of the object
for (let z in empDetails) {
    console.log(`Key is : ${z} and the value is : ${empDetails[z]}`);
}
console.log();

