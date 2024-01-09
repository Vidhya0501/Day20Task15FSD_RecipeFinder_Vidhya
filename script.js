const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#search');
const resultsList = document.querySelector('#results');


async function searchRecipes(searchValue) {
            try {
                const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=06b005a2&app_key=9c43877725b8bdefd60b81c3c35c04f3`);
            const data = await response.json();

            let recipes=data.hits;
            recipes.forEach((recipe) => {
                resultsList.innerHTML += `
                <div>
                    <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
                    <h3>${recipe.recipe.label}</h3>
                    <p>
                        ${recipe.recipe.ingredientLines.map(ingredient => `${ingredient}<br>`).join(" ")}
                    <p>
                    <br>
                    <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
                </div> 
                `
            })
            } catch (error) {
                console.log("error");
            }
    
}


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchRecipes( searchInput.value);
})


