// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.createElement('form');
let inputName = document.createElement('input');
let inputSurname = document.createElement('input');
let inputAge = document.createElement('input');
let btn = document.createElement('button');
let infoBox = document.createElement('div');

document.body.appendChild(form);
form.appendChild(inputName);
inputName.placeholder = 'press your name'

form.appendChild(inputSurname);
inputSurname.placeholder = 'press your surname'

form.appendChild(inputAge);
inputAge.placeholder = 'press your age'

form.appendChild(btn);
btn.innerText = 'CONFIRM'

btn.addEventListener('click', function (ev){
    ev.preventDefault();
    document.body.appendChild(infoBox)
    let obj = {
        name: inputName.value,
        surname: inputSurname.value,
        age: inputAge.value
    }
    infoBox.innerText = `Name = ${obj.name}, Surname = ${obj.surname}, Age = ${obj.age} `

})



