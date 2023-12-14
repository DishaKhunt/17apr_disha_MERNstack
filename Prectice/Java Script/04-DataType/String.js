let firstName = "     Disha     ";
console.log(firstName);
console.log(firstName.length);

// trim()
firstName = firstName.trim();
console.log(firstName);
console.log(firstName.length);

// toUpperCase()
firstName = firstName.toUpperCase();
console.log(firstName);

// toLowerCase()
firstName = firstName.toLowerCase();
console.log(firstName);

// slice(start index, end index) 
let newString = firstName.slice(0,4);
console.log(newString);