// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input = document.createElement('input');
let btn = document.createElement('button');
let textBox = document.createElement('p');

document.body.appendChild(input);
document.body.appendChild(btn);
document.body.appendChild(textBox);

btn.innerText = 'Confirm'

btn.addEventListener('click', function (ev){
    ev.preventDefault();

    let age = input.value;

    if(age >= 18){
        textBox.innerText = `your age is ${input.value} normal for access`;
        return
    }
    if(age < 18){
        textBox.innerText = `your age ${input.value} isn't normal decline access`;
        textBox.style.color = 'red';


    } else {
        textBox.innerText = `${input.value} It's wrong value you must write numbers from 1 until 111`;
    }



})