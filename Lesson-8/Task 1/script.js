// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.




let originalUser = {
    name: `Sergio`,
    surname: `Onofriy`,
    age: 22,
    key4: function(){
        console.log('Hello world')
    }
}



function changer(arr){
    if (arr){

    let cloneFunction = [];
        for (let key in arr){
            if (typeof arr[key] === `function` ){
               let cloner = arr[key].bind({});
               cloneFunction.push({cloner, key})
            }
        }


            let strChanger = JSON.stringify(arr);
            let secondUser = JSON.parse(strChanger)
            return secondUser
    }

}

console.log(changer(originalUser))