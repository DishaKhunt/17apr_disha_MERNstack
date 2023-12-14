// Types of operator

// String
// Number
// Undefined
// null
// bigInt
// Symbol

let age = 20;
let firstName = "Disha";

console.log(typeof(age));
console.log(typeof firstName);

// convert number to string
age = age + "";
console.log(typeof(age));

// convert string to number
let myStr = +"34";
console.log(typeof(myStr));

// Other option convert
// let n = 18;
// n = string(n);
// console.log(typeof n);

// concanatic String
let str1 = "10";
let str2 = "17";

let newString = str1 + str2;
console.log(newString);

newString = +str1 + +str2;
console.log(newString);
console.log(typeof newString);

// template String
// let aboutMe = "My name is " + firstName + " and  My age is " + age + "."; 
let aboutMe = `My name is ${firstName} and  My age is ${age}.`; 
console.log(aboutMe);

// undefined
let name;
// var name;
// const name;
console.log(typeof name);
name = "Harsh";
console.log(typeof name, name);

// null
let myVariable = null;
console.log(myVariable);
myVariable = "Disha";
console.log(typeof myVariable, myVariable);

console.log(typeof null); //bug , error

// BigInt
console.log(Number.MAX_SAFE_INTEGER);
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
console.log(myNumber + sameMyNumber);

// boolean or comparison operator
let num1 = 5;
let num2 = 2;
console.log(num1<num2);
console.log(num1>num2);
console.log(num1 != num2);

// truthy or falsy value

// falsy values
// false
// undefined
// ""
// null
// 0
