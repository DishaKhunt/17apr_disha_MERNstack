// how to itearte object

const person = {
    name:"Disha",
    age:20,
    // hobbies: ["gitar", "sleeping", "listening music"]
    "person hobbies": ["gitar", "sleeping", "listening music"]
 };

//  for in loop

for(let key in person){
    // console.log(person[key]);
    console.log(`${key} : ${person[key]}`);
}

// Object.keys

console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person)));
console.log(val);

for(let key of Object.keys(person)){
    // console.log(key);
    console.log(person[key]);
}