console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const Hour = Date().getHours();

  if (Hour >= 6 && Hour<= 12) {
    return "Good Morning"}
  else if (Hour >= 12 && Hour<=18) {
    return "Good Afternoon"}
  else if (Hour >=18 && Hour<=20) {
    return "Good Evening"}
  else {
    return "Good Night"}
  }

function getDayColor() {
  // Code here
  const currentDay = new Date().getDay();
  if (currentDay=== 0) {
    return "darkgray"
  }
  else if (currentDay=== 6){
    return "lightblue"
  }
  else if (currentDay === 7) {
    return "hotpink"
  }

}



display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
