const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// colors.forEach();

// The array method `forEach` is great for iterating through an array; let's use this to make some colored boxes!

// ## Task 1

// In the `./js/index.js` file, there is an array `colors` containing some hex codes. Create colored boxes from the array of hex codes using the `forEach` array method.

// The following hints may guide you:

// - For each hex code a new `div` with the class `color-box` should be created.
// - The `background-color` of the `div` should be the current hex code.
// - The element should be added to the page.
// יצרנו דיוויזיה אחכ יצרנו קלס שהו מכיל כל צבע מה אריי והכנסנו הכל לבאדי
colors.forEach((c) => {
  const colElement = document.createElement("div");

  colElement.classList = "color-box";
  colElement.style.background = c;


  const body = document.querySelector("body");
  body.append(colElement);
});

// Instead of writing the callback function directly inside the forEach method, we can use a function reference.

// - Create a new function called `renderColorBox`.
// - Copy your code from the arrow function into this new function.
// - Use the forEach method with renderColorBox to create the color boxes a second time!

// Switch to the `./js/index.js` file and make something great happen!

function renderColorBox(c) {
  const colElement = document.createElement("div");

  colElement.classList = "color-box";
  colElement.style.background = c;


  const body = document.querySelector("body");
  body.append(colElement);

}

colors.forEach((c) => renderColorBox(c));
