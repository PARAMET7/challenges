console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!

// In this challenge, you will encounter the following tasks:

// - passing multiple callback functions to a higher order function

// ## Tasks

// 1.  Write a function with the "function" keyword named "showWelcomeMessage".
//     The function should accept two parameters: "userName" and "userRole".
//     The function should log the following message to the console:
//     "Welcome ${userName}! You are logged in now as ${userRole}."

function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}

// showWelcomeMessage(handleUserLogin)

// 2.  Write a function with the "function" keyword named "showErrorMessage".
//     The function should accept one parameter "errorMessage"
//     The function should log the following message to the console:
//     "Login error: ${errorMessage}"

function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}


// 3.  Call the function "handleUserLogin" and pass three arguments in this order:

// - callback function: "showWelcomeMessage"
// - callback function: "showErrorMessage"
// - user name string: "Jane Doe"
//   (You should see the log from "showWelcomeMessage" in the console)

handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe")

// 4.  Call the function "handleUserLogin" and pass three arguments in this order:

// - callback function: "showWelcomeMessage"
// - callback function: "showErrorMessage"
// - user name string: "John Doe"
//   (You should see the log from "showErrorMessage" in the console)

// Please switch to the `./js/index.js` file to start the challenge.
