// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let  swap = (arr,index1,index2) => {
    let tamplate = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tamplate;
    return arr;
}


console.log(swap([11,22,33,44],0,1))