// 1. Створити пустий масив та :
let arr = [];


//     a. заповнити його 50 парними числами за допомоги циклу.
for(let a = 2; a <= 100; a++ ){
    if(a % 2 === 0){
        arr.push(a)
    }
}
console.log(arr)


//     b. заповнити його 50 непарними числами за допомоги циклу.
for(let a = 2; a <= 101; a++ ){
    if(a % 2 !== 0){
        arr.push(a)
    }
}
console.log(arr)


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr2 = []
for (let i = 0; i < 20; i++) {
    arr2.push(Math.floor(Math.random() * 10)); // Генерує число від 0 до 9

}
console.log(arr2);


//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr3 = [];
for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
    arr3.push(randomNumber);
}
console.log(arr3);

// 2. Вивести за допомогою console.log кожен третій елемен
for(let i = 2; i < arr3.length; i += 3){
    console.log(arr3[i])
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for(let i = 2; i < arr3.length; i += 3){
    if (arr3[i] % 2 === 0){
        console.log(arr3[i])
    }

}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arr4 = [];
for(let i = 2; i < arr3.length; i += 3){
    if (arr3[i] % 2 === 0){
        arr4.push(arr3[i])
    }
}
console.log(arr4)


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let arr5 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < arr5.length - 1; i++){
    if (arr5[i + 1] % 2 === 0){
        console.log(arr5[i])
    }
}


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arr6 =  [100,250,50,168,120,345,188];
let avverage = 0;
for(let i = 0; i < arr6.length - 1; i++){
    avverage +=  arr6[i]
}
console.log(avverage);




// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.


let arr7 = [];
for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
    arr7.push(randomNumber);
}

let newArr7 = 0
for (let i = 0; i < arr7.length -1; i++){
     newArr7 += arr7[i];
}
let newArr8 = newArr7 * 5 ;
console.log(newArr8)


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let lastArr = [1, 2, 4, true, false, 5 , "asd"];
let newArr = [];
for(let i = 0; i < lastArr.length - 1; i++){
    if (typeof lastArr[i] === 'number'){
        newArr.push(lastArr[i])
    }
}
console.log(newArr)