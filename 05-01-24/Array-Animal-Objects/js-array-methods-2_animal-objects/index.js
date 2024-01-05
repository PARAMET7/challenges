console.clear();

const animals = [
  {
    name: "cat",
    weight: 4,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  {
    name: "dog",
    weight: 10,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
  {
    name: "rabbit",
    weight: 2,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "lion", weight: 200, continents: ["Africa"] },
  { name: "tiger", weight: 150, continents: ["Asia"] },
  {
    name: "horse",
    weight: 500,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "giraffe", weight: 600, continents: ["Africa"] },
  { name: "zebra", weight: 300, continents: ["Africa"] },
  {
    name: "penguin",
    weight: 12,
    continents: ["Africa", "Australia", "Antarctica", "South-America"],
  },
  {
    name: "polar bear",
    weight: 450,
    continents: ["North-America", "Asia", "Arctic"],
  },
  { name: "panda", weight: 120, continents: ["Asia"] },
  { name: "koala", weight: 13, continents: ["Australia"] },
  { name: "kangaroo", weight: 70, continents: ["Australia"] },
  {
    name: "monkey",
    weight: 20,
    continents: ["South-America", "Asia", "Africa"],
  },
  { name: "sloth", weight: 8, continents: ["South-America"] },
  { name: "hippo", weight: 1500, continents: ["Africa"] },
  { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
];

// Hint: Besides the array method, check out the string method `startsWith()`. ===> the name object !
const firstAnimalStartingWithLetterG = animals.find((a) => a.name.startsWith("g"));
console.log(firstAnimalStartingWithLetterG);


const indexOfAnimalWithNameLongerFive = animals.findIndex(a => a.name.length>5);
console.log(indexOfAnimalWithNameLongerFive);




// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy (and the tests work).

const animalsSortedAlphabetically = animals.slice().sort((a,b) => { ////?????????????
  if (a.name<b.name) return -1
  if (a.name>b.name) return 1
  return 0
});
console.log(animalsSortedAlphabetically);





const animalsSortedByWeightStartingWithLowest = animals.slice().sort((a,b) => a.weight - b.weight);
console.log(animalsSortedByWeightStartingWithLowest);



const animalsSortedByWeightReversed = animals.slice().sort((a,b) => a.weight - b.weight).reverse();
console.log(animalsSortedByWeightReversed);



const animalWithWeightMoreThanFivehundredExists = animals.some((a) => a.weight > 500);
console.log('animal with weight more than 500: ', animalWithWeightMoreThanFivehundredExists);




// Hint: Filter for Europe first, then check every animal for its weight. ???????
const allAnimalsInEuropeWeighLessThanOnehundred = animals.slice().filter(a => a.continents.includes('Europe')).every(a => a.weight < 100);
console.log('animal Europ less than 100: ', allAnimalsInEuropeWeighLessThanOnehundred);


// Hint: filter + map + reduce ????

const weightOfAllAnimalsInAfrica = animals
  .filter((a) => a.continents.includes("Africa"))
  .map((e) => e.weight)
  .reduce((a, b) => a + b);
console.log(weightOfAllAnimalsInAfrica);


// Hint: As above, but divided by the number of animals in Africa.?????

const averageWeightOfAllAnimalsInAfrica =
  animals
    .filter((a) => a.continents.includes("Africa"))
    .map((a) => a.weight)
    .reduce((a, b) => a + b) /
  animals.filter((a) => a.continents.includes("Africa")).length;
console.log(
  averageWeightOfAllAnimalsInAfrica
);



export {
  firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive,
  animalsSortedAlphabetically,
  animalsSortedByWeightStartingWithLowest,
  animalsSortedByWeightReversed,
  animalWithWeightMoreThanFivehundredExists,
  allAnimalsInEuropeWeighLessThanOnehundred,
  weightOfAllAnimalsInAfrica,
  averageWeightOfAllAnimalsInAfrica,
};
