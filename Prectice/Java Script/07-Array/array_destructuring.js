// Array destructing

const myArray = ["value1", "value2", "value3", "value4"];


// let[myvar1, myvar2, , myvar3] = myArray;
let[myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
// console.log("value of myvar3", myvar3);

console.log(myNewArray);