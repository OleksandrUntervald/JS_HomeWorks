// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).


let booksArr = [
    {name: "Silent Hill",
     pages: 21,
     authors: ["first author","second author"],
     categories: ["first categori","second categori","third categori"],
    },
    {name: "Barrow Hillllllllllllllll",
        pages: 2221,
        authors: ["first author","second author", "third author","5autors","6 author","7autors" ],
        categories: ["first categori","second categori"],
    },
    {name: "Mouse Hill",
        pages: 11,
        authors: ["one author"],
        categories: ["one categori"],
    },
    {name: "Jim Hill",
        pages: 221,
        authors: ["first author","second author"],
        categories: ["first categori","second categori","lorem1","lorem2", "lorem3"],
    },
]

// - знайти наібльшу книжку.

if (booksArr[0].pages > booksArr[1].pages && booksArr[0].pages > booksArr[2].pages && booksArr[0].pages > booksArr[3].pages){
    console.log(booksArr[0])
} else if (booksArr[1].pages > booksArr[0].pages && booksArr[1].pages > booksArr[2].pages && booksArr[1].pages > booksArr[3].pages){
    console.log(booksArr[1])}
 else if (
        booksArr[2].pages > booksArr[0].pages && booksArr[2].pages > booksArr[1].pages && booksArr[2].pages > booksArr[3].pages){
        console.log(booksArr[2])
    } else{
     console.log(booksArr[3])
}

// - знайти книжку/ки з найбільшою кількістю жанрів
if (booksArr[0].categories.length > booksArr[1].categories.length && booksArr[0].categories.length > booksArr[2].categories.length && booksArr[0].categories.length > booksArr[3].categories.length){
    console.log(booksArr[0])
} else if (booksArr[1].categories.length > booksArr[0].categories.length && booksArr[1].categories.length > booksArr[2].categories.length && booksArr[1].categories.length > booksArr[3].categories.length){
    console.log(booksArr[1])}
else if (
    booksArr[2].categories.length > booksArr[0].categories.length && booksArr[2].categories.length > booksArr[1].categories.length && booksArr[2].categories.length > booksArr[3].categories.length){
    console.log(booksArr[2])
} else{
    console.log(booksArr[3])
}

// - знайти книжку/ки з найдовшою назвою
if (booksArr[0].name.length > booksArr[1].name.length && booksArr[0].name.length > booksArr[2].name.length && booksArr[0].name.length > booksArr[3].name.length){
    console.log(booksArr[0])
} else if (booksArr[1].name.length > booksArr[0].name.length && booksArr[1].name.length > booksArr[2].name.length && booksArr[1].name.length > booksArr[3].name.length){
    console.log(booksArr[1])}
else if (
    booksArr[2].name.length > booksArr[0].name.length && booksArr[2].name.length > booksArr[1].name.length && booksArr[2].name.length > booksArr[3].name.length){
    console.log(booksArr[2])
} else{
    console.log(booksArr[3])
}


// - знайти книжку/ки які писали 2 автори
if (booksArr[0].authors.length === 2){
    console.log(booksArr[0].authors)
} else if (booksArr[1].authors.length === 2){
    console.log(booksArr[1].authors)
}else if (booksArr[2].authors.length === 2){
    console.log(booksArr[2].authors)
} else{
    console.log(booksArr[3].authors)
}


// - знайти книжку/ки які писав 1 автор
if (booksArr[0].authors.length === 1){
    console.log(booksArr[0].authors)
} else if (booksArr[1].authors.length === 1){
    console.log(booksArr[1].authors)
}else if (booksArr[2].authors.length === 1){
    console.log(booksArr[2].authors)
} else{
    console.log(booksArr[3].authors)
}