// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// #bovDJDTIjt

let arr = [1, 2, 3, true, false, 'Okten', 'Oleksandr'];

function printer(a){
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++){
        document.write(`<li>${a[i]}</li>`);
    }
    document.write(`</ul>`);
}
printer(arr)