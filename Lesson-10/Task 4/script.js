// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


let div = document.createElement('div');
document.body.appendChild(div);


let localVelue = +localStorage.getItem('number');

localVelue += 1;
localStorage.setItem('number', localVelue);


div.innerText = localVelue

