const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalMap = {
  NE: species.filter((specie) => specie.location === 'NE').map((specie) => specie.name),
  NW: species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
  SE: species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
  SW: species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
};

function includeNames(animalMapWithoutNames) {
  const arrayNEIncludingNames = () => {
    animalMapWithoutNames.NE.forEach((element) => {
      const newObj = {
        [element]: species
          .filter((specie) => specie.name === element)
          .map((animal) => animal.residents),
      };
      console.log(newObj);
    });
  };
  arrayNEIncludingNames();
  animalMap.NE = 'oi';
  return animalMap;
}

function getAnimalMap(options) {
  if (options === undefined) return animalMap;
  if (options.includeNames) return includeNames(animalMap);
}

console.log(getAnimalMap({ includeNames: 'oi' }));

module.exports = getAnimalMap;
