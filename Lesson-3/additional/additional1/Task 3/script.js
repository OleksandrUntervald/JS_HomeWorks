// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arr = [2,17,13,6,22,31,45,66,100,-18];

/* 3. перебрати циклом while та вивести  числа тільки з непарним індексом
*  5. перебрати циклом while та вивести  числа тільки парні  значення */
let a = 0;
while(a < arr.length) {
    if (arr[a] % 2 !== 0){
        let c = [];
        c.push(arr[a])
        console.log(c)
    } else {
        let d = [];
        d.push(arr[a])
        console.log(d)
    }
    a++;

}

/* 3. перебрати циклом for та вивести  числа тільки з непарним індексом
*  5. перебрати циклом for та вивести  числа тільки парні  значення */
for (let i = 0; i < arr.length; i++ ){
    if (arr[i] % 2 !== 0){
        let c = [];
        c.push(arr[i])
        console.log(c)
    } else {
        let d = [];
        d.push(arr[i])
        console.log(d)
    }
}


/*7. замінити кожне число кратне 3 на слово "okten"*/
let newArr = arr.slice();

for (let e = 0; e < newArr.length; e++){
  if (newArr[e] % 3 === 0){
      newArr[e] = "Okten";
  }

}
console.log(newArr)

// 8. вивести масив в зворотньому порядку.
newArr.reverse();

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let revArray = arr.slice();
revArray.reverse();
/* 9.3. перебрати циклом while та вивести  числа тільки з непарним індексом
*  9.5. перебрати циклом while та вивести  числа тільки парні  значення */
let g = 0;
while(g < revArray.length) {
    if (revArray[g] % 2 !== 0){
        let k = [];
        k.push(revArray[g]);
        console.log(k)
    } else {
        let l = [];
        l.push(revArray[g]);
        console.log(l)
    }
    g++;
}

for(let z = 0; z < revArray.length; z++){
    if (revArray[z] % 2 !== 0){
        let x = [];
        x.push(revArray[z]);
        console.log(x)
    } else {
        let c = [];
        c.push(revArray[z]);
        console.log(c)
    }
}

/* 9.3. перебрати циклом for та вивести  числа тільки з непарним індексом
*  9.5. перебрати циклом for та вивести  числа тільки парні  значення */

/*9.7. замінити кожне число кратне 3 на слово "okten"*/

let newArr2 = revArray.slice();

for (let e = 0; e < newArr2.length; e++){
    if (newArr2[e] % 3 === 0){
        newArr2[e] = "Okten";
    }
}
console.log(newArr2)