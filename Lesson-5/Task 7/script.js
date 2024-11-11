// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// #gEFoxMMO

let printer = (text, li) => {
    document.write(`<ul>`);
    for (let i = 0; i < li; i++ ){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};

printer("text", 6)

