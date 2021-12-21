const list = document.querySelector("#categories");
const allItem = list.querySelectorAll(".item");
console.log(`Number of categories: ${allItem.length} `);

allItem.forEach((element) => {
  const lengthTitle = element.querySelector("h2").textContent;
  console.log(`Category: ${lengthTitle}`);
  const array2 = element.querySelectorAll("li");
  console.log(`Elements ${array2.length}`);
});
