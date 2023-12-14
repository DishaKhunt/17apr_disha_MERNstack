// function inside function

function app(){
    const myFunc = () => {
        console.log("Hello From myFunc");
    }

    const addTwo = (num1 , num2) =>{
        return num1 + num2;
    }

    const mul = (num1 , num2) => num1* num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(3, 4));
    console.log(mul(2,5));
}

app();