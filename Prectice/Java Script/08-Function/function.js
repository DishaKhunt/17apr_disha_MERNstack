function singHBD(){
    console.log("Wish you Happy Birthday...");
}

singHBD();


function sumTwoNumber(num1, num2){
    return num1 + num2;
}

const returnedValue = sumTwoNumber(2, 5);
console.log(returnedValue);


// odd or even
// input : 1 number
// output : true , false

function isEven(number){
    return number % 2 === 0;
}
console.log(isEven(18));

// function
// input : string
// output : first charecter

function firstChar(str){
    return str[0];
}

console.log(firstChar("Disha"));

// function
// input : array, target(number)
// output: index of target if target present in array

function findTarget(array, target){
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
