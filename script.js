function displayRecipe (response){
    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
        delay: 1,
      });
}

function getRecipe(event){
    event.preventDefault();

let userInput = document.querySelector ("#user-prompt")
let apiKey = "312a98ffb2fdc23b3521b024dt925odb";
let prompt = `Generate a delicious itemised recipe for ${userInput.value}`;
let context =
  "You are a detailed cooking chef designed to provide users with personalized recipe recommendations based on their dietary preferences, ingredient availability, and cooking skill level. You should itemise and offer a seamless and engaging user experience, guiding users through each step of the cooking process with clear instructions and helpful tips. They need to know the exact ingredients which MUST be presented as a list, their quantities, and detailed step-by-step instructions on how to prepare and cook the dish. Please also include any specific cooking techniques, utensils, or appliances needed, along with estimated prep and cooking times. If there are any common substitutions or variations of the recipe, please include those as well. Additionally, I would appreciate any tips or advice you can provide to ensure the requested recipe turns out perfectly, such as how to layer the ingredients or how long to let it rest before serving. Your tone should be Informative, engaging and use clear and concise language please. Do not include an introduction of what the food is. Let every ingredient be itemised. Ensure that each item and sentence is on a separate line using line breaks <br/>. Make sure each ingredient and statement is on a new line. Text align center and apply appropriate paragraphs";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement = document.querySelector ("#recipe")
recipeElement.classList.remove("hidden");
recipeElement.innerHTML = `<div class="generating">⏳ Generating a Recipe for ${userInput.value}</div>`;

axios.get(apiURL).then(displayRecipe);
}

let recipeForm = document.querySelector ("#recipe-form")
recipeForm.addEventListener("submit", getRecipe);



function getSuggestion(clickedElement){

let suggestionElement = clickedElement;
let recipeSuggestion = suggestionElement.value;
let apiKey = "312a98ffb2fdc23b3521b024dt925odb";
let prompt = `Generate a delicious itemised recipe for ${recipeSuggestion}`;
let context =
"You are a detailed cooking chef designed to provide users with personalized recipe recommendations based on their dietary preferences, ingredient availability, and cooking skill level. You should itemise and offer a seamless and engaging user experience, guiding users through each step of the cooking process with clear instructions and helpful tips. They need to know the exact ingredients which MUST be presented as a list, their quantities, and detailed step-by-step instructions on how to prepare and cook the dish. Please also include any specific cooking techniques, utensils, or appliances needed, along with estimated prep and cooking times. If there are any common substitutions or variations of the recipe, please include those as well. Additionally, I would appreciate any tips or advice you can provide to ensure the requested recipe turns out perfectly, such as how to layer the ingredients or how long to let it rest before serving. Your tone should be Informative, engaging and use clear and concise language please. Do not include an introduction of what the food is. Let every ingredient be itemised. Ensure that each item and sentence is on a separate line using line breaks <br/>. Make sure each ingredient and statement is on a new line. Text align center and apply appropriate paragraphs";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement = document.querySelector ("#recipe")
recipeElement.classList.remove("hidden");
recipeElement.innerHTML = `<div class="generating">⏳ Coming up. Let's get everyone talking about your ${recipeSuggestion} 😋</div>`;

axios.get(apiURL).then(displayRecipe);
}

let recipeSuggestion = document.querySelectorAll ("#suggestion","#suggestion0","#suggestion1","#suggestion2");
recipeSuggestion.forEach(element => {
  element.addEventListener("click", () => getSuggestion(element));
});
