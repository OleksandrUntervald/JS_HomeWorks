// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User('1','sergio1','ono1','sergiono@gmail.com','+380930555555'),
    new User('2','sergio2','ono2','sergiono@gmail.com','+380930555555'),
    new User('3','sergio3','ono3','sergiono@gmail.com','+380930555555'),
    new User('4','sergio4','ono4','sergiono@gmail.com','+380930555555'),
    new User('5','sergio5','ono5','sergiono@gmail.com','+380930555555'),
    new User('6','sergio6','ono6','sergiono@gmail.com','+380930555555'),
    new User('7','sergio7','ono7','sergiono@gmail.com','+380930555555'),
    new User('8','sergio8','ono8','sergiono@gmail.com','+380930555555'),
    new User('9','sergio9','ono9','sergiono@gmail.com','+380930555555'),
];

console.log(users)
