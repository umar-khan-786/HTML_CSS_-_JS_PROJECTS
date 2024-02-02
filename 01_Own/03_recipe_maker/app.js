const apiKey = "IPlSiAWWebqHKpGr5aiDcw==rkaROF9uUQe5aUqo";
const findRecipeBtn = document.querySelector(".btn_search");
const input = document.querySelector(".input");
const recipesContainer = document.querySelector(".recipes_container");
async function findRecipe() {
  if (input.value) {
    recipesContainer.innerHTML = "";
    const api = `https://api.api-ninjas.com/v1/recipe?query=${input.value}&X-Api-Key=${apiKey}`;
    const response = await fetch(api);
    const data = await response.json();

    if (data.length != 0) {
      data.forEach((recipe) => {
        const div = document.createElement("div");
        div.className = "recipe_card";
        div.innerHTML = `
            <img src="Images/card.jpg" alt="" width="250" />
            <h3>${recipe.title}</h3>
            <p>Serve <span>${recipe.servings.slice(0, 1)}</span> Persons</p>
        `;
        recipesContainer.appendChild(div);

        div.addEventListener("click", () => {
          console.log(recipe);
        });
      });
    }
  }
}
findRecipeBtn.addEventListener("click", findRecipe);
