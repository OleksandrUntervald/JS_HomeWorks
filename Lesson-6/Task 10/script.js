// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


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


let obj = {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}

pockets = (cards) =>{
    for (const card of cards){
        if (card.cardsSuit === "spade"){
            obj.spades.push(card);
        }
        if (card.cardsSuit === "heart"){
            obj.spades.push(card);
        }
        if (card.cardsSuit === "diamond"){
            obj.spades.push(card);
        }
        if (card.cardsSuit === "club"){
            obj.spades.push(card);
        }
    }
    return cards
}

console.log(pockets(cards))
