// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let printer = (arr) => {
        for (let i = 0; i < arr.length; i++){
        document.write(`<div>${arr[i].id} ${arr[i].name} ${arr[i].age}</div>`)
    }
}


let users = [
    {id: 1,name: "Sany", age: 18},
    {id: 2,name: "Oleg", age: 19},
    {id: 3,name: "Petro", age: 20},
    {id: 4,name: "Vanya", age: 21},
                                    ];
printer(users);