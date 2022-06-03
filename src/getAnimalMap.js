const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const NE = species.filter((specie) => specie.location === 'NE');
const NW = species.filter((specie) => specie.location === 'NW');
const SE = species.filter((specie) => specie.location === 'SE');
const SW = species.filter((specie) => specie.location === 'SW');

function animalsNames() {
  const object = {
    NE: NE.map((animalObj) => animalObj.name),
    NW: NW.map((animalObj) => animalObj.name),
    SE: SE.map((animalObj) => animalObj.name),
    SW: SW.map((animalObj) => animalObj.name),
  };
  return object;
}

function includeNamesOnly() {
  const object = {
    NE: NE
      .map((animalObj) => ({ [animalObj.name]: animalObj.residents
        .map((resident) => resident.name) })),
    NW: NW
      .map((animalObj) => ({ [animalObj.name]: animalObj.residents
        .map((resident) => resident.name) })),
    SE: SE
      .map((animalObj) => ({ [animalObj.name]: animalObj.residents
        .map((resident) => resident.name) })),
    SW: SW
      .map((animalObj) => ({ [animalObj.name]: animalObj.residents
        .map((resident) => resident.name) })),
  };
  return object;
}

function sortedMale() {
  const object = {
    NE: NE.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'male').map((resident) => resident.name).sort() })),
    NW: NW.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'male').map((resident) => resident.name).sort() })),
    SE: SE.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'male').map((resident) => resident.name).sort() })),
    SW: SW.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'male').map((resident) => resident.name).sort() })),
  };
  return object;
}

function sortedFemale() {
  const object = {
    NE: NE.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'female').map((resident) => resident.name).sort() })),
    NW: NW.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'female').map((resident) => resident.name).sort() })),
    SE: SE.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'female').map((resident) => resident.name).sort() })),
    SW: SW.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'female').map((resident) => resident.name).sort() })),
  };
  return object;
}

function male() {
  const object = {
    NE: NE.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'male').map((resident) => resident.name) })),
    NW: NW.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'male').map((resident) => resident.name) })),
    SE: SE.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'male').map((resident) => resident.name) })),
    SW: SW.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'male').map((resident) => resident.name) })),
  };
  return object;
}

function female() {
  const object = {
    NE: NE.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'female').map((resident) => resident.name) })),
    NW: NW.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'female').map((resident) => resident.name) })),
    SE: SE.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'female').map((resident) => resident.name) })),
    SW: SW.map((animalObj) => ({ [animalObj.name]: animalObj.residents
      .filter((animal) => animal.sex === 'female').map((resident) => resident.name) })),
  };
  return object;
}

function includeNamesSortedAndSex(options) {
  if (options.sex === 'male') return sortedMale();
  return sortedFemale();
}

function includeNamesSex(options) {
  if (options.sex === 'male') return male();
  return female();
}

function includeNamesSorted() {
  const object = {
    NE: NE
      .map((animalObj) => ({ [animalObj.name]: animalObj.residents
        .map((resident) => resident.name).sort() })),
    NW: NW
      .map((animalObj) => ({ [animalObj.name]: animalObj.residents
        .map((resident) => resident.name).sort() })),
    SE: SE
      .map((animalObj) => ({ [animalObj.name]: animalObj.residents
        .map((resident) => resident.name).sort() })),
    SW: SW
      .map((animalObj) => ({ [animalObj.name]: animalObj.residents
        .map((resident) => resident.name).sort() })),
  };
  return object;
}

function includeNames(options) {
  if (options.sorted && options.sex) return includeNamesSortedAndSex(options);
  if (options.sex) return includeNamesSex(options);
  if (options.sorted) return includeNamesSorted();
  return includeNamesOnly();
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return animalsNames();
  return includeNames(options);
}

module.exports = getAnimalMap;
