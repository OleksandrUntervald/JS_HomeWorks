// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];

sortNums = (array,direction) => {
    if (direction === 'ascending'){
      return nums.sort((a, b) => a - b)
    }
    if (direction === 'descending'){
        return nums.sort((a, b) => b - a)
    } {
        console.log("Wrong value")
    }
}

console.log(sortNums([3,11,21], "descending"))