const counterValue = document.getElementById("value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let currentValue = 0;

const updateCounterValue = () => {
  counterValue.textContent = currentValue;
};

decrementBtn.addEventListener("click", () => {
  currentValue -= 1;
  updateCounterValue();
});

incrementBtn.addEventListener("click", () => {
  currentValue += 1;
  updateCounterValue();
});

// the end //