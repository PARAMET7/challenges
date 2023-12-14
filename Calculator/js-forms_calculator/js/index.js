console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();


  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data)
  const A = Number(data.numberA);
  const B = Number(data.numberB);
  let result;


  switch (data.operator) {
    case "addition":
      result = add(A, B);
      break;
    case "subtraction":
      result = subtract(A, B);
      break;
    case "multiplication":
        result = subtract(A, B);
      break;
    case "division":
        result = subtract(A, B);
    break;

  }

  resultOutput.textContent = result;
});
