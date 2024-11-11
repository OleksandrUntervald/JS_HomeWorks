// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// #bovDJDTIjt

let arr = [1, 2, 3, true, false, 'Okten', 'Oleksandr']

let printer = (array) => {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++){
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);

 }
printer(arr)