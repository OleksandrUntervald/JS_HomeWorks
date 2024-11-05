/*
*  Task - 11 : (#iBvqtjEm
- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
 буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
)
* */

let x;
x = 100;
if (x === false || x === 0 || x === -0 || x === 0n || x === "" || x === '' || x === `` || x === null || x === undefined || isNaN(x)) {
    x = "default"
    console.log(x);
} else {
    console.log(x)
}



