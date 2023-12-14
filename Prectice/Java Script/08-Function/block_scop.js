// block scop vs function scop

// let and const are block scop
// var is function scop

// {
    // let firstName = "Disha";
    // console.log(firstName);
//     const firstName = "Disha";
//     console.log(firstName);
// }

// {
    // let firstName = "Isha";
    // console.log(firstName);
//     const firstName = "Isha";
//     console.log(firstName);
// }

// let firstName = "Manshi";
// console.log(firstName);
// const firstName = "Manshi";
// console.log(firstName);


// {
//     var firstName1 = "Disha";
// }
// console.log(firstName1);

// if(true){
//     var firstName = "Disha";
// }
// console.log(firstName);

function myApp(){
    if(true){
        let  firstName = "Disha"
        console.log(firstName);
    }
    // console.log(firstName);
}
myApp();