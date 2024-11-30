// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.


const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');

const target = document.getElementsByClassName('target')[0];

fetch(url)
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;

        for(const recipe of recipes){
            const recipeDiv = document.createElement('div');
            for(const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])){
                    const h3 = document.createElement('h3');
                    h3.innerText = recipeKey;
                    const arrayAndTitleDiv = document.createElement('div')
                    const ol = document.createElement('ol')
                    const array = recipe[recipeKey];
                    for (const  item of array){
                      const li =  document.createElement('li');
                      li.innerText = item;
                      ol.appendChild(li);
                    }
                    arrayAndTitleDiv.appendChild(h3)
                    arrayAndTitleDiv.appendChild(ol)
                    recipeDiv.appendChild(arrayAndTitleDiv)
                } else {

                    const keyDiv = document.createElement('div');
                    keyDiv.innerText = `${recipeKey} :
                    ${recipe[recipeKey]}`
                    recipeDiv.appendChild(keyDiv)
                }
            }
            const img = document.createElement('img');
            img.src = recipe.image;
            recipeDiv.appendChild(img)
            target.appendChild(recipeDiv);
            img.style.width = '200px'
        }

    });