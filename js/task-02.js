const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredientText) => {
  const listItem = document.createElement("li");

  listItem.textContent = ingredientText;

  listItem.classList.add("item");

  ingredientsList.appendChild(listItem);
});
