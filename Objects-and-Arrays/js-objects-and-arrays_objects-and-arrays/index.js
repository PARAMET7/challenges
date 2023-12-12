console.clear();

const people = [
  {
    name: "Homer",
    age: 39,
    parents: { mothersName: "Mona", fathersName: "Abe" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    friend: { name: "Moe Szyslak", work: "owner of Moes Tavern" },
    "other friends": ["Barney Gumble", "Carl Carlson", "Lenny Leonard"],
    color_cloth: "white",
  },
  {
    name: "Marge",
    age: 36,
    parents: {
      mothersName: "Jacqueline Bouvier",
      fathersName: "Clancy Bouvier",
    },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    kids: [
      { name: "Bart", child_number: "first" },
      { name: "Lisa", child_number: "second" },
      { name: "Maggie", child_number: "third" },
    ],
    color_cloth: "lightgreen",
  },
  {
    name: "Bart",
    age: 10,
    parents: { mothersName: "Marge", fathersName: "Homer" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    quotes: ["Ay Caramba!", "Eat my shorts!", "I didnt do it!"],
    color_cloth: "red",
  },
  {
    name: "Lisa",
    age: 8,
    parents: { mothersName: "Marge", fathersName: "Homer" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    quotes: [
      "Bart!",
      "If anyone wants me, Ill be in my room.",
      "Quit it, Bart!",
    ],
    color_cloth: "orange",
  },
];

// EXERCISE 1
// Change the value of the variable nameOfFirstPerson to equal the name of the first person.

const nameOfFirstPerson = people[0].name;
console.log(nameOfFirstPerson)

// EXERCISE 2
// Change the value of the variable homersOtherFriends to equal the other friends of Homer.
people[0].friend.name = "other friends";
const homersOtherFriends = people[0].friend.name;

console.log(homersOtherFriends)

// EXERCISE 3
// Change the value of the variable ageOfThirdPerson to equal the age of the third person.

people[2].age = 8
const ageOfThirdPerson = people[2].age;

console.log(ageOfThirdPerson)
// EXERCISE 4
// Change the value of the variable mothersNameOfSecondPerson to equal the mothers name of the second person.

people[1].name = people[1].parents.mothersName;
const mothersNameOfSecondPerson = people[1].name;


console.log(mothersNameOfSecondPerson)
// EXERCISE 5
// Change the value of the variable animaltypeOfLisasPet to equal the type of animal of Lisas pet.

people[3].pet.animal= "type of animal of Lisas pet";

const animaltypeOfLisasPet = people[3].pet.animal;
console.log(animaltypeOfLisasPet)

export {
  nameOfFirstPerson,
  homersOtherFriends,
  ageOfThirdPerson,
  mothersNameOfSecondPerson,
  animaltypeOfLisasPet,
};
