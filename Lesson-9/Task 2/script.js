// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main','Products','About us','Contacts'];

let ul1 = document.createElement('ul');


document.body.appendChild(ul1);

for (let i = 0; i < arr.length; i++){
    let li = document.createElement('li');
    ul1.appendChild(li);
    li.innerText = arr[i];
    li.style.listStyle = "none";
}


