// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8 ,9 , 10];
for(let i = 1; i < arr1.length; i++){
    if (arr1[i] % 2 === 0){
        console.log(arr1[i])
    }
}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
let arr2 = [];
for (let a = 0; a < arr1.length; a++){
    arr2.push( arr1[a] )
}
console.log(arr2)

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr3 =  [ 'a', 'b', 'c'];
let arr4 = '';
for(let i = 0; i < arr3.length; i++){
    arr4 += arr3[i];
}
console.log(typeof arr4, arr4)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let wArr = '';
let n = 0;
while (n < arr3.length) {
    wArr += arr3[n];
    n++;
}
console.log(typeof wArr, wArr)


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let arr7 = '';
for(let words of arr3){
   arr7 += words;

}
console.log(typeof arr7, arr7)