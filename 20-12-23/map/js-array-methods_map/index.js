console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((e) =>{
  return e.answer.toLocaleLowerCase();
})
// console.log(lowerCaseAnswers)


const questionsAndAnswersTogether = cards.map ((e) => {
  return e.question + " - " + e.answer;

});
// console.log(questionsAndAnswersTogether)


// ["How often can I use <header>? - As often as you like.", ...]

const questionAndAnswer1 = cards.map ((e) => {
  return `question:  ${e.question} , answer: ${e.answer}`

})

console.log(questionAndAnswer1)


// [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

const questionAndAnswer = cards.map ((e) => {
  let obj = {
    question: e.question,
    answer: e.answer
  }

  return obj;

});

console.log(questionAndAnswer)


export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };


// In the `./index.js` file, there is a `cards` array with three objects.
// Below this array, you will find a couple of variables (e.g. `lowerCaseAnswers`). They all are initialized with `null`.
// And now it's your turn: delete the value `null` and write code such that the variables have a value corresponding to their name. Use `map` to achieve this goal.
// You will find some hints as comments.
// Switch to the `./index.js` file and map / filtersome recipes!
// - If you want to check whether you solved the tasks correctly, run the test following the steps described on "Local Development".
