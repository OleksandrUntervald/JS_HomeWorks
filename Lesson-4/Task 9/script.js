// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function printer(a){
    for (let i = 0; i < a.length; i++){
        document.write(`<div>${a[i].id} ${a[i].name} ${a[i].age}</div>`)
    }

}


let users = [
    {id: 1,name: "Sany", age: 18},
    {id: 2,name: "Oleg", age: 19},
    {id: 3,name: "Petro", age: 20},
    {id: 4,name: "Vanya", age: 21},
                                    ];
printer(users);