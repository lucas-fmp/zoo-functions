const data = require('../data/zoo_data');

const { employees, species } = data;
const employeeInfos = {};
const animals = [];

const arrayOfSpecies = (arrayOfIds) => {
  species.forEach((animal) => {
    arrayOfIds.forEach((Id) => {
      if (animal.id.includes(Id)) {
        animals.push(animal.name);
      }
    });
  });
  return animals;
};

const arrayOfLocations = (animalNames) => {
  const speciesArr = [];
  const locationsArr = [];
  species.forEach((specie) => {
    animalNames.forEach((animalName) => {
      if (specie.name === animalName) {
        speciesArr.push(specie);
      }
    });
  });
  speciesArr.forEach((specie) => {
    locationsArr.push(specie.location);
  });
  return locationsArr;
};

const getEmployeeByName = (obj) => {
  employees.forEach((employee) => {
    if (employee.firstName === obj.name || employee.lastName === obj.name) {
      employeeInfos.id = employee.id;
      employeeInfos.fullName = `${employee.firstName} ${employee.lastName}`;
      employeeInfos.species = arrayOfSpecies(employee.responsibleFor);
      employeeInfos.locations = arrayOfLocations(animals);
    }
  });
  return employeeInfos;
};

const getEmployeeById = ((obj) => {
  employees.forEach((employee) => {
    if (employee.id === obj.id) {
      employeeInfos.id = employee.id;
      employeeInfos.fullName = `${employee.firstName} ${employee.lastName}`;
      employeeInfos.species = arrayOfSpecies(employee.responsibleFor);
      employeeInfos.locations = arrayOfLocations(animals);
    }
  });
  return employeeInfos;
});

function getEmployeesCoverage(obj) {
  if (Object.keys(obj).includes('name')) {
    return getEmployeeByName(obj);
  }
  if (Object.keys(obj).includes('id')) {
    return getEmployeeById(obj);
  }
}

console.log(getEmployeesCoverage({ name: 'Spry' }));

module.exports = getEmployeesCoverage;
