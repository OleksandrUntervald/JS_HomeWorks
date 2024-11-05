// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr1 = [];
for(let a = 0; a <= 10; a++){
    if (arr1[a] === a){
    }
    arr1.push(a);
}
console.log(arr1)


//     #mDMWMW5a
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

let arr2 = [];
for(let a = 0; a <= 10; a++){
    if (arr2[a] === a){
    }
    arr2.push(a);
    console.log(a);
    document.write(`<h1>${a}</h1>`)
}
console.log(arr2)



// #4sXhaa5YMM
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
let arr3 = [];
for(let a = 0; a <= 100; a++){
    arr3.push(a);
    console.log(a);
    document.write(`<h2>${a}</h2>`)
}
console.log(arr3)

// #s24slNyz7
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

let arr4 = [];
for(let a = 0; a <= 100; a += 2){
    arr4.push(a);
    console.log(a);
    document.write(`<h2>${a}</h2>`)
}
console.log(arr4)

// #zananT5FR1
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
let arr5 = [];
for(let a = 0; a <= 100; a++){
    if (a % 2 === 0){
        arr5.push(a);
        console.log(a);
        document.write(`<h2>${a}</h2>`)
    }

}
console.log(arr5)


// #Tfrwls7FM
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

let arr6 = [];
for(let a = 0; a <= 100; a++){
    if (a % 2 !== 0){
        arr6.push(a);
        console.log(a);
        document.write(`<h2>${a}</h2>`)
    }

}
console.log(arr6)