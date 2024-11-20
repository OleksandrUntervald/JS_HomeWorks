// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let div = document.createElement('div');
div.style.maxWidth = '1220px';
div.style.margin = '0 auto'
div.style.height = '100vh';
document.body.appendChild(div);
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';
div.style.gap = '10px';




for (let i = 0; i < coursesAndDurationArray.length; i++){
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let block = document.createElement('div');
    document.body.appendChild(block);
    block.style.width = '150px';
    block.style.height = '150px';
    block.style.background = 'red';
    block.style.display = 'flex';
    block.style.alignItems = 'center';
    block.style.flexDirection = 'column';
    block.style.justifyContent = 'center';
    div.appendChild(block);
    block.appendChild(ul);
    ul.appendChild(li)
    li.innerText = `${coursesAndDurationArray[i].title}  ${coursesAndDurationArray[i].monthDuration}` ;
}

