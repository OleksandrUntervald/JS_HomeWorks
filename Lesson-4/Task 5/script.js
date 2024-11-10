// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// #hOL6126

function printer(a){
   return document.write(`<p>Hello ${a}</p>`)
}
 printer(`Okten`);