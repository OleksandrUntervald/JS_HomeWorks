// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';

rewrite = (str1) => {
    if(str1){
        let arr = [];
        arr = str1.split(' ');
        return arr;
    }
    return "";
}
console.log(rewrite(str))
