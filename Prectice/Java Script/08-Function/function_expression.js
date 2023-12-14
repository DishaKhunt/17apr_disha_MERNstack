// function expression
const singHBD = function(){
    console.log("Wish you Happy Birthday...");
}
singHBD();



const sumTwoNumber = function(num1 , num2){
    return num1 + num2;
}
console.log(sumTwoNumber(2,5));

// odd or even
// input : 1 number
// output : true , false

const isEven = function (number){
    return number % 2 === 0;
}
console.log(isEven(18));

// function
// input : string
// output : first charecter

const firstChar = function (str){
    return str[0];
}

console.log(firstChar("Disha"));

// function
// input : array, target(number)
// output: index of target if target present in array

const findTarget = function (array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]==target){
            return i;
        }
    }
    return -1;
}

const myAarry = [2, 3 , 5, 7, 8];
const ans = findTarget(myAarry, 7);
console.log(ans);
