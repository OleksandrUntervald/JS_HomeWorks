// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let counter = (a) => {
        let num = a[0]
    for (let i = 0; i < a.length; i++){
        let numbers = a[i]
        if( numbers < num){
            num = numbers
        }
    }
    return num;
}

let arr = [1, 2, 3, 4, 1000, 55]
let g = counter(arr)
console.log(g)
