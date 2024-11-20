// =========================
//
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


const container = document.createElement('div');
container.style.maxWidth = '1220px';
container.style.margin = '0 auto'
container.style.height = '100vh';
document.body.appendChild(container);
container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.flexWrap = 'wrap';
container.style.gap = '10px';


for (let i = 0; i < coursesArray.length; i++){
    let block = document.createElement('div');
    let ul = document.createElement('ul');

    let h1 = document.createElement('h1');
    block.appendChild(h1);
    h1.innerText = `${coursesArray[i].title}`;
    let p = document.createElement('p');
    let p1 = document.createElement('p');
    document.body.appendChild(block);
    block.style.width = '50%';
    block.style.height = 'auto';
    block.style.background = 'yellow';
    block.style.display = 'flex';
    block.style.alignItems = 'center';
    block.style.flexDirection = 'column';
    block.style.justifyContent = 'center';
    container.appendChild(block);

    let textBox = document.createElement('div');
    block.appendChild(textBox);

    textBox.appendChild(p);
    textBox.appendChild(p1);
    textBox.style.width = '100%';
    textBox.style.display = 'flex';
    textBox.style.justifyContent = 'center';
    textBox.style.alignItems = 'center';
    textBox.style.gap = '150px';


    p.innerText = `monthDuration: ${coursesArray[i].monthDuration}`;


    p1.innerText = `hourDuration:  ${coursesArray[i].hourDuration}`;
    let ulBox = document.createElement('div');
    block.appendChild(ulBox);
    ulBox.appendChild(ul);
    ulBox.style.width = '100%';
    ul.style.width = '100%';

    ul.style.display = 'flex';
    ul.style.alignItems = 'center';
    ul.style.flexDirection = 'column';
    ul.style.justifyContent = 'center';

    for (let c = 0; c < coursesArray[i].modules.length; c ++){
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerText = `${coursesArray[i].modules[c]}`
        li.style.width = '100%';
    }


}


//     створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.



const blocks = document.createElement('div');
blocks.style.width = '100%';
blocks.style.height = '400px';
blocks.style.border ='2px solid red';
blocks.style.background = 'yellow';
container.appendChild(blocks);
blocks.style.display = 'flex';
blocks.style.justifyContent = 'center';
blocks.style.alignItems = 'center';
blocks.style.gap = '10px';

let block1 = document.createElement('div');
block1.classList.add('block', 'block1');
let block1Text = document.createElement('p');
block1Text.innerText = 'LOREMLOREMLOREMLOREMLOREMLOREM LOREMLOREM DSFSFSDFS'
block1.appendChild(block1Text);

let block2 = document.createElement('div');
block2.classList.add('block', 'block2');
let block2Text = document.createElement('p');
block2Text.innerText = 'M LOREMLOREMLOREMLOREM*'
block2.appendChild(block2Text);

let block3 = document.createElement('div');
block3.classList.add('block', 'block3');
let block3Text = document.createElement('p');
block3Text.innerText = 'M LEM*'
block3.appendChild(block3Text);

blocks.appendChild(block1);
blocks.appendChild(block2);
blocks.appendChild(block3);

document.querySelectorAll('.block').forEach(block => {
    block.style.width = '30%';
    block.style.background = 'green';
    block.style.border = '2px solid orange';
    block.style.height = 'auto';
});

let block1Height = block1.clientHeight;
let block2Height = block2.clientHeight;
let block3Height = block3.clientHeight;


if (block1Height >= block2Height && block1Height >= block3Height){
    block2.style.height = `${block1.clientHeight}px`;
    block3.style.height = `${block1.clientHeight}px`;
} else if (block2Height >= block1Height && block2Height >= block3Height){
    block1.style.height = `${block2.clientHeight}px`;
    block3.style.height = `${block2.clientHeight}px`;
} else {
    block1.style.height = `${block3.clientHeight}px`;
    block2.style.height = `${block3.clientHeight}px`;
}


