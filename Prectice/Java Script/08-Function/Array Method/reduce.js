let arr = [1, 2, 3 , 4, 5];

const output = arr.reduce((res, cur) => {
    return res + cur;
});

console.log(output); //15


// largest num

let num = [1, 6, 7, 4, 5];

const result = num.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});

console.log(result);//7