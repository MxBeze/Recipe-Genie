function getRecipe(event){
    event.preventDefault();

    let recipeElement = document.querySelector ("#recipe")
    recipeElement.innerHTML = "The Poem";

    new Typewriter("#recipe", {
        strings: [recipeElement.innerHTML],
        autoStart: true,
        cursor: null,
        delay: 100,
      });
}


let recipeForm = document.querySelector ("#recipe-form")
recipeForm.addEventListener("submit", getRecipe);