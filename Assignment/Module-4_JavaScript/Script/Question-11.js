function Useralert(){
    alert("This is an alert box!");
}

function Userconfirom(){
    var userConfirmed = confirm("Do you want to proceed?");

if (userConfirmed) {
    console.log("User clicked OK.");
} else {
    console.log("User clicked Cancel.");
}
}

function Userprompt(){
    var userInput = prompt("Please enter your name:", "Disha Khunt");

if (userInput !== null) {
    alert("User entered: " + userInput);
} else {
    alert("User clicked Cancel.");
}
}