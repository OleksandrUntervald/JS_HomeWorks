// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// #0Kxco1edSN


function printer(a){
    document.write(`<ul>`);
      document.write(`<li>${a}</li>`);
      document.write(`<li>${a}</li>`);
      document.write(`<li>${a}</li>`);
    document.write(`</ul>`);
}
printer(`Hello Okten`)
