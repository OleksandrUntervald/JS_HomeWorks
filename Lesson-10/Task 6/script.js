// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let input = document.createElement('input');
let div = document.createElement('div');
input.type = 'number';
document.body.appendChild(input);
document.body.appendChild(div);

input.oninput = function (){
    div.innerText = +this.value * 2.2;
}