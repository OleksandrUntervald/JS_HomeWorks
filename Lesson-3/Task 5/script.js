// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
let a = '<ul>';

document.write(a)

for (let i = 0; i < listOfItems.length - 1; i++){
   document.write(`<li>${listOfItems[i]}</li>`)
}
a += '</ul>';
document.write(a)