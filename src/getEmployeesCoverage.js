const data = require('../data/zoo_data');

const { employees, species } = data;
const employeeInfos = {};

const arrayOfSpecies = (arrayOfIds) => {
  const animals = [];
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
      employeeInfos.locations = arrayOfLocations(arrayOfSpecies(employee.responsibleFor));
    }
  });
  if (Object.keys(employeeInfos).length !== 0) {
    return employeeInfos;
  }
  throw new Error('Informações inválidas');
};

const getEmployeeById = ((obj) => {
  employees.forEach((employee) => {
    if (employee.id === obj.id) {
      employeeInfos.id = employee.id;
      employeeInfos.fullName = `${employee.firstName} ${employee.lastName}`;
      employeeInfos.species = arrayOfSpecies(employee.responsibleFor);
      employeeInfos.locations = arrayOfLocations(arrayOfSpecies(employee.responsibleFor));
    }
  });
  if (Object.keys(employeeInfos).length === 0) {
    throw new Error('Informações inválidas');
  }
  return employeeInfos;
});

const getAllEmployees = () => {
  const arrayyy = [];
  employees.forEach((employee) => {
    const objetooo = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: arrayOfSpecies(employee.responsibleFor),
      locations: arrayOfLocations(arrayOfSpecies(employee.responsibleFor)),
    };
    arrayyy.push(objetooo);
  });
  return arrayyy;
};

const getEmployeeByIdOrName = (obj) => {
  if (Object.keys(obj).includes('name')) {
    return getEmployeeByName(obj);
  }
  if (Object.keys(obj).includes('id')) {
    return getEmployeeById(obj);
  }
};

function getEmployeesCoverage(obj) {
  if (obj !== undefined) {
    return getEmployeeByIdOrName(obj);
  }
  return getAllEmployees();
}

// getEmployeesCoverage({ id: 'Id inválido' });

module.exports = getEmployeesCoverage;
