// callback function
// callback is function passed as a argument to another function.
function myFunc2(name){
    console.log("inside my func2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello, my name is disha....");
    callback("Isha");
}

myFunc(myFunc2);