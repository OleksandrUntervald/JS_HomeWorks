// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

// Створення елементів на сторінці
const block = document.createElement('div');

document.body.appendChild(block);

let price = 100;
let lastUpdate = localStorage.getItem('lastUpdate');
let currentPrice = localStorage.getItem('price');

if (currentPrice) {
    price = parseInt(currentPrice);
}

block.innerText = `${price}грн`;

if (lastUpdate) {
    const timeElapsed = Date.now() - lastUpdate;

    if (timeElapsed > 10000) {
        price += 10;
        block.innerText = `${price}грн`;

        localStorage.setItem('price', price);
        localStorage.setItem('lastUpdate', Date.now());
    }
} else {
    localStorage.setItem('price', price);
    localStorage.setItem('lastUpdate', Date.now());
}
