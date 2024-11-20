//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Princess {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, footFound) {
        this.name = name;
        this.age = age;
        this.footFound = footFound;
    }
}

let princessBox = [
    new Princess(`Sara Conor`, `66`, `44` ),
    new Princess(`Sara Conor1`, `55`, `43` ),
    new Princess(`Sara Conor2`, `44`, `42` ),
    new Princess(`Sara Conor3`, `33`, `41` ),
    new Princess(`Sara Conor4`, `22`, `40` ),
    new Princess(`Sara Conor5`, `21`, `31` ),
    new Princess(`Sara Conor6`, `23`, `32` ),
    new Princess(`Sara Conor7`, `24`, `33` ),
    new Princess(`Sara Conor8`, `25`, `34` ),
    new Princess(`Sara Conor8`, `26`, `35` )

]

let princeBox = [
    new Prince(`SkyWoker`, `18`, `40`)
]

for (let i = 0; i < princessBox.length; i++){
    if (princessBox[i].footSize === princeBox[0].footFound){
        console.log(princessBox[i].name + ` match ` + princeBox[0].name)
    }
}

let generalWife = princessBox.find((princess) => princess.footSize === princeBox[0].footFound);

console.log(generalWife)
