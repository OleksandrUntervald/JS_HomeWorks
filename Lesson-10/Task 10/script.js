//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// Це завдання частково за допомогою ШІ зробив

let arr = [];

for(let i = 0; i < 100; i++){
    arr[i] = [];
    arr[i].push(1 + i);
}

let currentPage = 0;  // Поточна сторінка
const itemsPerPage = 10;  // Кількість елементів на одній сторінці

let div = document.createElement('div');
document.body.appendChild(div);


let p = document.createElement('p');
div.appendChild(p);
p.innerText = arr + '';


function renderPage() {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = arr.slice(start, end);

    p.innerText = pageItems.map(item => item[0]).join(', '); // Вивести значення з кожного масиву
}


renderPage();

let prev = document.createElement('button');
prev.innerText = 'prev';
div.appendChild(prev);

let next = document.createElement('button');
next.innerText = 'next';
div.appendChild(next);

prev.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
});

next.addEventListener('click', () => {
    if (currentPage < Math.floor(arr.length / itemsPerPage)) {
        currentPage++;
        renderPage();
    }
});
