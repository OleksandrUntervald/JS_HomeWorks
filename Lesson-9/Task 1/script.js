// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div1 = document.createElement('div');
div1.classList.add('wrap');
div1.classList.add('collapse');
div1.classList.add('alpha');
div1.classList.add('beta');

document.body.appendChild(div1);
div1.style.width = "600px";
div1.style.height = "600px";
div1.style.background = "red";
div1.style.marginBottom = "100px";

let div2 = div1.cloneNode(true);
document.body.appendChild(div2);
