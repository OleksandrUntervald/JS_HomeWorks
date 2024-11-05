/*
Task - 10 : #uwsz1RnTQJ1
- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.
 */

let val1 = Number(prompt("choose your number"));

let val2 = Number(prompt("choose your number"));

if (val1 > val2){
    console.log(val1);
} else if(val1 < val2){
    console.log(val2);
} else {
console.log("even values")
}
