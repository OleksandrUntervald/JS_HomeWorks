
let sesions = JSON.parse(localStorage.getItem('sesionList'));

for (let ses of sesions){
    let div = document.createElement('div');
    div.innerText = ses;
    document.body.appendChild(div);

}