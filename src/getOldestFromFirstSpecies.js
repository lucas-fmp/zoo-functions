const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const getEmployee = employees.filter((employee) => employee.id === id);
  const firstSpecie = getEmployee[0].responsibleFor[0];
  const getSpecieObject = species.filter((animal) => animal.id === firstSpecie);
  const ages = [];
  getSpecieObject[0].residents.forEach((resident) => ages.push(resident.age));
  const gettingOldest = ages.reduce((a, b) => Math.max(a, b));
  const indexOfOldestAnimal = ages.indexOf(gettingOldest);
  const selectedAnimal = getSpecieObject[0].residents[indexOfOldestAnimal];
  return [selectedAnimal.name, selectedAnimal.sex, selectedAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
