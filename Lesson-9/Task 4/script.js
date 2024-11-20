// #Kx1xgoKy8
// - Є масив




let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


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
    let block = document.createElement('div');
    block.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description');

    document.body.appendChild(block);
    block.style.width = '150px';
    block.style.height = '150px';
    block.style.background = 'red';
    block.style.display = 'flex';
    block.style.alignItems = 'center';
    block.style.flexDirection = 'column';
    block.style.justifyContent = 'center';
    div.appendChild(block);
    block.appendChild(h1);
    block.appendChild(p);
    h1.innerText = `${coursesAndDurationArray[i].title}`;
    p.innerText =  `${coursesAndDurationArray[i].monthDuration}`;
}
