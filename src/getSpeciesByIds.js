const data = require('../data/zoo_data');

function getSpeciesByIds(...inputIds) {
  const returnedAnimalsById = [];
  const { species: allAnimalsObjects } = data;
  allAnimalsObjects.forEach((animalObject) => {
    inputIds.forEach((inputId) => {
      const { id: animalId } = animalObject;
      if (animalId === inputId) {
        returnedAnimalsById.push(animalObject);
      }
    });
  });
  return returnedAnimalsById;
}

module.exports = getSpeciesByIds;
