// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Client {
    constructor (id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


let arr = [
    new Client(1, 'John', 'Doe', 'john.doe@example.com', '+380930555555', ['Jem', 'Water']),
    new Client(2, 'Jane', 'Smith', 'jane.smith@example.com', '+380930555556', ['Icccream']),
    new Client(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '+380930555557', ['bread', 'sneekers']),
    new Client(4, 'Bob', 'Brown', 'bob.brown@example.com', '+380930555558', ['pot']),
    new Client(5, 'Tom', 'White', 'tom.white@example.com', '+380930555559', ['wear1', 'wear2', 'wear3']),
    new Client(6, 'Lucy', 'Green', 'lucy.green@example.com', '+380930555560', ['socks']),
    new Client(7, 'Emma', 'Black', 'emma.black@example.com', '+380930555561', ['T-Shirt', 'bag']),
    new Client(8, 'Oliver', 'King', 'oliver.king@example.com', '+380930555562', ['bed']),
    new Client(9, 'Sophia', 'Lee', 'sophia.lee@example.com', '+380930555563', ['case', 'lemonad']),
    new Client(10, 'Liam', 'Davis', 'liam.davis@example.com', '+380930555564', ['item1', 'item2', 'item3']),
];
