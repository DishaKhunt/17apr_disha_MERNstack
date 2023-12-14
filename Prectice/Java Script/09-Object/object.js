//objects reference type
// arrays are good but not sufficient
// for real word data 
// objects stor the key value stor
// objects don't have index

// how to creat object
const key = "email"
 const person = {
    name:"Disha",
    age:20,
    // hobbies: ["gitar", "sleeping", "listening music"]
    "person hobbies": ["gitar", "sleeping", "listening music"]
 };
 
//  how to access data from objects
 console.log(person);
 console.log(person["name"]);
 console.log(person.age);
//  console.log(person.hobbies);
console.log(person["person hobbies"]);

//  how to add key value pair to objects
person.gender = "female";
console.log(person);

// add the key value
person[key] = "dishakhunt@gmail.com";
console.log(person);