console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  const pizzaInput1 = (pizzaInput1.value);
  const pizzaSize2 = (pizzaInput2.value);

  calculatePizzaGain(Diameter1, Diameter2);
  updatePizzaDisplay(pizzaElement, newSize);
  updateOutputColor(size1, size2)
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  const pizzaInput1 = (pizzaInput1.value);
  const pizzaSize2 = (pizzaInput2.value);

  calculatePizzaGain(Diameter1, Diameter2);
  updatePizzaDisplay(pizzaElement, newSize);
  updateOutputColor(size1, size2)
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(Diameter1,Diameter2) {
  const pizzaArea1 = Math.PI*Math.pow(Diameter1/2, 2);
  const pizzaArea2 = Math.PI*Math.pow(Diameter2/2, 2);

  const calculatedValue = ((Diameter2 - Diameter1)/ Diameter1) *100;
  output.textContent = Math.round(calculatedValue);
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement,newSize) {
  const displaySize = (newSize / 24) * 100;
  pizzaElement.style.width = `the width: ${displaySize} -px`;
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1,size2) {
  if (size1>size2 ) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
