// Object inside Array
// very usefull in realword application

const users = [
    {userId : 1, firstName: 'Disha', gender: 'female'},
    {userId : 2, firstName: 'Isha', gender: 'female'},
    {userId : 3, firstName: 'Manshi', gender: 'female'}
]

console.log(users);

for(let user of users){
    // console.log(user);
    console.log(user.firstName);
}

// nested destructring
const [{firstName: user1firstName, userId} , ,{gender: user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender); 