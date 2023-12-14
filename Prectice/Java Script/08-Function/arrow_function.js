// arrow function

const singHBD = () =>{
    console.log("Wish you Happy Birthday...");
}
singHBD();


const sumTwoNumber = (num1 , num2) =>{
    return num1 + num2;
}
console.log(sumTwoNumber(2,3));

// odd or even
// input : 1 number
// output : true , false

// const isEven = number =>{
//     return number % 2 === 0;
// }

const isEven = number => number % 2 === 0;
console.log(isEven(5));



// function
// input : string
// output : first charecter

const firstChar = (str) => str[1];

console.log(firstChar("Disha"));

// function
// input : array, target(number)
// output: index of target if target present in array

const findTarget = (array, target) =>{
    for(let i = 0; i<array.length; i++){
        if(array[i]==target){
            return i;
        }
    }
    return -1;
}

const myAarry = [2, 3 , 5, 7, 8];
const ans = findTarget(myAarry, 3);
console.log(ans);
