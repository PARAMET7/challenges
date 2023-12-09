console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkButtom = document.querySelector('[data-js="dark-mode-button"]');
const lightButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkButtom.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  console.log("Darkmode selected");
});

lightButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  console.log("lightMode selected");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
