// for of loop

const fruits1 = ["apple", "grapes", "mango", "banana"];
const fruits2 = [];

for(let fruit of fruits1){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2); 