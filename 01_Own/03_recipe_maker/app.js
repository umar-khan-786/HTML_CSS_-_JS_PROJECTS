const apiKey = "IPlSiAWWebqHKpGr5aiDcw==rkaROF9uUQe5aUqo";
const findRecipeBtn = document.querySelector(".btn_search");
const input = document.querySelector(".input");
const recipesContainer = document.querySelector(".recipes_container");
const modalBox = document.querySelector(".modal_box");
const showRecipePage = document.querySelector(".show_recipe");
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

        div.addEventListener("click", showRecipe(recipe));
      });
    }
  }
}

function showRecipe(recipe) {
  return function () {
    modalBox.children[0].innerHTML = recipe.title;
    const ingredientsList = modalBox.children[1].children[2];
    ingredientsList.innerHTML = "";
    const instructionsList = modalBox.children[2].children[2];
    instructionsList.innerHTML = "";

    const ingredients = recipe.ingredients.split("|");
    ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.innerText = ingredient;
      ingredientsList.appendChild(li);
    });

    const instructions = recipe.instructions.split(".");
    instructions.forEach((instruction, index) => {
      if (instruction && instruction != " ") {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const text = document.createTextNode(instruction);
        span.innerText = `Step ${index + 1}: `;
        li.appendChild(span);
        li.appendChild(text);
        instructionsList.appendChild(li);
      }
    });

    showRecipePage.classList.add("active");
  };
}
findRecipeBtn.addEventListener("click", findRecipe);
showRecipePage.addEventListener("click", () => {
  showRecipePage.classList.remove("active");
});

modalBox.addEventListener("click", (e) => {
  e.stopPropagation();
});
