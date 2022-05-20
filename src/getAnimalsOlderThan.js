const data = require('../data/zoo_data');

const { species: allAnimalsObjects } = data;

function selecionaAnimal(animal) {
  let selectedObject;
  allAnimalsObjects.forEach((specieObject) => {
    const { name: specieName } = specieObject;
    if (animal === specieName) {
      selectedObject = specieObject;
    }
  });
  return selectedObject;
}

function confereIdade(age, selectedObject) {
  const { residents } = selectedObject;
  const arrayOfAges = [];
  residents.forEach((element) => {
    arrayOfAges.push(element.age);
  });
  return arrayOfAges.every((number) => number >= age);
}

function getAnimalsOlderThan(animal, age) {
  const selectedAnimalObject = selecionaAnimal(animal);
  return confereIdade(age, selectedAnimalObject);
}

module.exports = getAnimalsOlderThan;
