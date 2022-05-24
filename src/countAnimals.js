const data = require('../data/zoo_data');

const { species } = data;

const emptyParameter = () => {
  const returnedObject = {};
  const names = species.map((element) => element.name);
  const quantity = species.map((element2) => element2.residents.length);
  for (let index = 0; index < species.length; index += 1) {
    returnedObject[names[index]] = quantity[index];
  }
  return returnedObject;
};

const justSpecies = (animal) => {
  let counter = 0;
  const animalName = Object.values(animal[0])[0];
  species.forEach((element) => {
    if (element.name === animalName) {
      counter += element.residents.length;
    }
  });
  return counter;
};

const speciesAndSex = (animal) => {
  let counter = 0;
  const animalName = Object.values(animal[0])[0];
  const sex = Object.values(animal[0])[1];
  species.forEach((element) => {
    if (element.name === animalName) {
      element.residents.forEach((element2) => {
        if (element2.sex === sex) {
          counter += 1;
        }
      });
    }
  });
  return counter;
};

function countAnimals(...animal) {
  if (animal.length === 0) {
    return emptyParameter();
  }
  if (Object.keys(animal[0]).length === 1) {
    return justSpecies(animal);
  }
  if (Object.keys(animal[0]).length === 2) {
    return speciesAndSex(animal);
  }
}

module.exports = countAnimals;
