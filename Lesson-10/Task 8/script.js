// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let form = document.createElement('form');
document.body.appendChild(form);
form.name = 'formGenerator';

let input1 = document.createElement('input');
input1.type = 'number';
input1.name = 'counterLines';
form.appendChild(input1);

let input2 = document.createElement('input');
input2.type = 'number';
input2.name = 'counterCell';
form.appendChild(input2);

let input3 = document.createElement('input');
input3.type = 'text';
input3.name = 'nameGiver';
form.appendChild(input3);

let btn = document.createElement('button');
form.appendChild(btn);
btn.innerText = 'generate';

let table = document.createElement('table');
document.body.appendChild(table);

const tableGenerator = document.forms['formGenerator'];


tableGenerator.onsubmit = function (e) {
    table.innerText = '';
    e.preventDefault();
    const lines = +tableGenerator.counterLines.value;
    const cells = +tableGenerator.counterCell.value;
    const text =  tableGenerator.nameGiver.value;
    console.log(lines, cells, text);


    for (let i = 0; i < lines; i++){
        let tr = document.createElement('tr');
        for (let j = 0; j < cells; j++ ){
            let td = document.createElement('td');
            td.innerText = text;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
