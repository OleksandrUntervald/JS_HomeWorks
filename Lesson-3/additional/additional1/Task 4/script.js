// #yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr1 = [1, 2, 3, 4, 5, 6 ,7 , 8 , 9 , 10];
for(let a = 0; a < arr1.length; a++){
    console.log(arr1[a]);
}


//     #GamKju89ob
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr2 = ['1', '2', '3', '4', '5', '6' ,'7' , '8' , '9' , '10'];
for(let a = 0; a < arr1.length; a++){
    console.log(arr2[a]);
}

//     #Bm76xmg
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr3 = [true, 2, '3', false, '5', undefined ,NaN , 8 , '9' , 10];
for(let a = 0; a < arr1.length; a++){
    console.log(arr3[a]);
}

//     #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr4 = [1, 2, 3, 4, 5, 6 ,7 , 8 , 9 , 10, '1', '2', '3', '4', '5', '6' ,'7' , '8' , '9' , '10', true, false, true, false,, true, false,, true, false,, true, false ];
for(let a = 0; a < arr4.length; a++){
    if (typeof arr4[a] === "boolean"){
        console.log(arr4[a]);
    }
}

// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arr5 = [1, 2, 3, 4, 5, 6 ,7 , 8 , 9 , 10, '1', '2', '3', '4', '5', '6' ,'7' , '8' , '9' , '10', true, false, true, false,, true, false,, true, false,, true, false ];
for(let a = 0; a < arr4.length; a++){
    if (typeof arr5[a] === "number"){
        console.log(arr5[a]);
    }
}

// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr6 = [1, 2, 3, 4, 5, 6 ,7 , 8 , 9 , 10, '1', '2', '3', '4', '5', '6' ,'7' , '8' , '9' , '10', true, false, true, false,, true, false,, true, false,, true, false ];
for(let a = 0; a < arr4.length; a++){
    if (typeof arr6[a] === "string"){
        console.log(arr6[a]);
    }
}

