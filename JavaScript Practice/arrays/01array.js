//Creating an array
let arr = Array();
console.log(arr);

//adding initial size for an array
let scores = Array(10);
console.log(scores);

//creating an array with elements
let score = Array(10, "Krishna", 30, "Sumanth");
console.log(score);

//checking the size of an array
console.log(score.length);

//accessing array element through index
console.log(score[1]);

//accessing the last element without knowing the lenth of an array
console.log(score[score.length - 1]);

//inserting to specific index
score[2] = "Sujatha";
console.log(score);

//Adding a new array element, New element will be added to end of the array
score.push(80);
console.log(score);


/**
 * 
 ** indexOf(searchElement, fromIndex)
 *
 *? Returns the index value of the first occurance of given element as parameter
 *
 *? searchElement : Holds the element whose index needs to be searched
 *? fromIndex : From which index searching needs to be done. Default value is 0.
 *  
 * */ 
