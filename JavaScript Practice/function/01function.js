function sum() {
    let num1 = 26;
    let num2 = 24;
    console.log("Addition of 2 numbers are :", num1+num2);
}
sum();

//passing values through parameters
function Hello(name) {
    console.log(`Hello ${name}, How are you doing?`);
}

Hello("K Subramanyeshwara")

function multi(val1, val2) {
    let val3 = val1 * val2;
    console.log("Multiplication of 2 numbers are", val3);
}

multi(23,24);
multi(10,12);


function URL(url,domain) {
    let http = 'https://'
    let result = http + url + domain;
    return result;
}

console.log(URL('ksubramanyeshwara', '.me'));
let mySite = URL('ksubramanyeshwara', '.me');
console.log(mySite);


function addition(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
        
    }
    return sum;
}

let sumArray = [1, 2, 3, 4, 5];
let sumArrResult = addition(sumArray);
console.log(sumArrResult);


function add(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

let result = add(1, 2, 3, 4, 5, 6);
console.log(result);