console.clear();

const cards = [
  {
    id: "1",
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
    tags: ["js", "next"],
  },
];


const onlyCardWithIdTwo = cards.filter((e) =>{
  return e.id === "2";
})

// console.log(onlyCardWithIdTwo)

const allCardsWith3Tags = cards.filter(e => e.tags.length === 3 );
//console.log(allCardsWith3Tags)



const allCardsThatAreNotBookmarked = cards.filter(e => !e.isBookmarked);
// console.log(allCardsThatAreNotBookmarked)


const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(e => e.tags.includes("html") || e.tags.includes("js"));
console.log(allCardsThatAreNotBookmarked)




export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
