// lexical scop
function myApp()
{
    const myVar = "value1";

    function myFunc(){
        // const myVar = "value2";
        console.log("inside myFunc", myVar);
    }

    console.log(myVar);
    myFunc();
}
myApp();