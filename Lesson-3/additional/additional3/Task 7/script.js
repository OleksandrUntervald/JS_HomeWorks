// #4WrHwFTEop0
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
let users = [
    {name: 'jane', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'ava', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'jane', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


for (let user of users){
    if (user.age > 30){
        console.log(user)
    }
}

for (let user of users){
    if (user.status === true ){
        console.log(user)
    }
}
for (let user of users){
    if (user.status === false ){
        console.log(user)
    }
}