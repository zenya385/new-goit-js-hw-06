const decrBtn = document.querySelector("[data-action='decrement']");
const incrBtn = document.querySelector("[data-action='increment']");
const addCounterValue = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  addCounterValue.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  addCounterValue.textContent = counterValue;
};

decrBtn.addEventListener("click", decrement);
incrBtn.addEventListener("click", increment);
