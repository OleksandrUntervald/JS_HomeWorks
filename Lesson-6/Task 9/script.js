// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

let arr1 = ['spade', 'diamond','heart', 'clubs'];
let arr2 = ['6', '7', '8' , '9' , '10', 'ace','jack','queen','king'];
const cards = [];

for (const suit of arr1){
    for (const values of arr2){
       const card = ({cardsSuit: suit, value: values})
        if (suit === "heart" || suit === "diamond"){
            card.color = 'red';
        }

        if (suit === "spade" || suit === "clubs"){
            card.color = 'black';
        }
        cards.push(card)
    }

}


// - знайти піковий туз
console.log(cards.find(card => card.value === "ace" && card.cardsSuit === "spade"))


// - всі шістки
console.log(cards.filter(card => card.value === "6" ));


// - всі червоні карти
console.log(cards.filter(card => card.color === "red" ))
// - всі буби
console.log(cards.filter(card => card.cardsSuit === "diamond" ))

// - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardsSuit === "club" && (card.value !== '6' || card.value !== '7' || card.value!=='8' || card.value !=='9')));
