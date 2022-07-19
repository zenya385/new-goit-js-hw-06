

const list = document.querySelector('#categories');
const allItem = list.querySelectorAll(".item");
console.log('~ allItem', allItem)
// console.log(`Number of categories: ${allItem.length} `);

allItem.forEach((el)=>{
  const lengthTitle = el.querySelector('h2').textContent;
  console.log(`Category: ${lengthTitle}`);
  const array2 = el.querySelectorAll("li");
  console.log(`Elements ${array2.length}`);
})
