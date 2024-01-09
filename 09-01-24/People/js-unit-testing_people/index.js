export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => person.firstName + ' '+ person.lastName);
}

export function getNameAndAge(people) {
  return people.map((p) => `${p.lastName} (${p.age})`);
}

export function getPeopleByAge(people, age) {
  return people.filter((p) => p.age === age);
}


export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((p) => p.age > age)
    .map((p) => p.firstName + " " + e.lastName);

}




export function getPeopleByLastName(people, lastName) {
  return people.filter((p) => p.lastName === lastName);

}

export function findPersonById(people, id) {
  return people.filter((p) => p.id === id);

}

export function isAnyoneOlderThan(people, age) {
  return people.some((p) => p.age > age);
}

export function getFullNamesSortedByAge(people) {
  return people.sort((a, b) => a.age - b.age)
  .map((people) =>`${people.firstName} + ${people.lastName}` )

}
