console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const tosSuccess = document.querySelector('[data-js="success"]');



function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

//hidding tos !
hideTosError();
hideSuccess();


form.addEventListener("submit", (event) => {
  event.preventDefault();
 // --v-- write your code here --v--
  const isChecked = tosCheckbox.checked;

  if (!isChecked) {
    showTosError();
    return;
  }
  console.log("checked!");

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

tosCheckbox.addEventListener("change", (e) =>{
  const isChecked = tosCheckbox.checked;
  if (!isChecked) {
    showTosError()
  } else {
      hideTosError()
  };
});
