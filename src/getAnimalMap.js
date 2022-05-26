const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAllAnimals = () => {
  const NE = [];
  const NW = [];
  const SE = [];
  const SW = [];
  species.forEach((specie) => {
    if (specie.location === 'NE') NE.push(specie.name);
    if (specie.location === 'NW') NW.push(specie.name);
    if (specie.location === 'SE') SE.push(specie.name);
    if (specie.location === 'SW') SW.push(specie.name);
  });
  return { NE, NW, SE, SW };
};

const includeNamesNE = (NE, specie) => {
  const auxObj = {};
  auxObj[specie.name] = specie.residents.map((animal) => animal.name);
  NE.push(auxObj);
  return NE;
};

const includeNamesNW = (NW, specie) => {
  const auxObj = {};
  auxObj[specie.name] = specie.residents.map((animal) => animal.name);
  NW.push(auxObj);
  return NW;
};

const includeNamesSE = (SE, specie) => {
  const auxObj = {};
  auxObj[specie.name] = specie.residents.map((animal) => animal.name);
  SE.push(auxObj);
  return SE;
};

const includeNamesSW = (SW, specie) => {
  const auxObj = {};
  auxObj[specie.name] = specie.residents.map((animal) => animal.name);
  SW.push(auxObj);
  return SW;
};

const animalsIncludingName = () => {
  const NE = [];
  const NW = [];
  const SE = [];
  const SW = [];
  species.forEach((specie) => {
    if (specie.location === 'NE') return includeNamesNE(NE, specie);
    if (specie.location === 'NW') return includeNamesNW(NW, specie);
    if (specie.location === 'SE') return includeNamesSE(SE, specie);
    if (specie.location === 'SW') return includeNamesSW(SW, specie);
  });
  return { NE, NW, SE, SW };
};

function getAnimalMap(options) {
  if (options === undefined || !Object.keys(options)
    .includes('includeNames')) return getAllAnimals();
  if (Object.keys(options).includes('includeNames')
  && Object.keys(options).length === 1) return animalsIncludingName();
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
