export function getAnimal(animal) {
  return animal === 'cats'
  ? 'I like animal'
  : animal
  ? `I love ${animal} !`
  : 'I do not like '
}

console.log(getAnimal());
