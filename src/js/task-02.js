const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredienElement = document.querySelector("#ingredients");

const allElement = ingredients.map((elem) => {
  const addElementItem = document.createElement("li");
  addElementItem.textContent = elem;

  return addElementItem;
});
ingredienElement.append(...allElement);
