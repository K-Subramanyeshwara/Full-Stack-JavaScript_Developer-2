const now = new Date();
console.log(now);

//Provides enalrged version of date and time
console.log(now.toString());

//Provides only year name
console.log(now.getFullYear());

//Provides month number and Numbering starts from 0
console.log(now.getMonth());
//Provides day number and Numbering starts from 0
console.log(now.getDay());

//time will be shown in milisecond
console.log(now.getTime());

//provides time in 24 hour format
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());