// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


let sum = (arr) => {
        let numbers = 0;
    for (let i = 0; i < arr.length; i++){
        numbers += arr[i];
    }
    return numbers
}

  console.log(sum([1,2,10,2,6]))
