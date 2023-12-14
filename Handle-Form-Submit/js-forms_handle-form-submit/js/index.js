console.clear();

const form = document.querySelector('[data-js="form"]');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const d = Object.fromEntries(fd);

  console.log(d);

});
