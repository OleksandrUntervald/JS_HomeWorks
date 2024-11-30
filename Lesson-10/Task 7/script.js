// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void


let arr1 = [{name:1},{name:2}, {name: 3}]
let arr2 = [{Surname:1},{Surname:2}, {Surname: 3}];

localStorage.setItem('arr1Array', JSON.stringify(arr1))
localStorage.setItem('arr2Array', JSON.stringify(arr2))





function addToLocalStorage(arrayName,objToAdd){
     const lsItem = localStorage.getItem(arrayName);
     if (!lsItem) {
         throw new Error('it`s array not being');
     }
     const array = JSON.parse(lsItem);
     if (typeof objToAdd === 'object') {
         array.push(objToAdd);
     }
     localStorage.setItem(arrayName, JSON.stringify(array))
}

addToLocalStorage('arr1Array', {})
