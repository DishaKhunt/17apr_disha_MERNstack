// Nested if else

// winning number 19

// 19 your right number
// 17 too low
// 20 too high

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number");

// if(userGuess === winningNumber)
// {
//     console.log("your guess is right!!");
// }
// else{
//     if(userGuess < winningNumber){
//         console.log("too low!!");
//     }
//     else{
//         console.log("too high!!");
//     }
// }

let tempInDegree = 25;

if(tempInDegree < 0)
{
    console.log("ex tremely cold outside");
}
else if(tempInDegree < 16)
{
    console.log("wheather is cold outside");
}
else if(tempInDegree < 25)
{
    console.log("weather is okay");
}
else if(tempInDegree < 35)
{
    console.log("lets go for swim");
}
else if(tempInDegree < 45)
{
    console.log("turn on AC");
}
else{
    console.log("tooo hot!!");
}