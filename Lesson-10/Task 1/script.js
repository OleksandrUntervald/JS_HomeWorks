// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let div = document.createElement('div');
document.body.appendChild(div);
div.id = 'text';

let btn = document.createElement('button');
div.appendChild(btn);
btn.innerText = `for delete Press here`

btn.onclick = function (ev){
  let elem =  document.getElementById('text');
  elem.remove();
}