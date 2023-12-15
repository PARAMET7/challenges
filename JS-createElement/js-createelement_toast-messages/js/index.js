console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (e) => {
  e.preventDefault;
  const t =document.createElement('il');
  t.classList.add('toast-container__message');
  t.textContent = 'got a new toast';
  toastContainer.appendChild(t)
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", (e) => {
  e.preventDefault;
  toastContainer.innerHTML = ''

  // Exercise: Clear the stack of toast messages
});
