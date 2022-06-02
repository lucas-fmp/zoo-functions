const data = require('../data/zoo_data');

function getAnimalsNames(employeeResponsibleFor) {
  const animalsName = [];
  employeeResponsibleFor.forEach((employeeAnimalId) => data.species.forEach((specie) => {
    if (employeeAnimalId === specie.id) {
      animalsName.push(specie.name);
    }
  }));
  return animalsName;
}

function getAnimalsLocations(employeeResponsibleFor) {
  const animalsLocation = [];
  employeeResponsibleFor.forEach((employeeAnimalId) => data.species.forEach((specie) => {
    if (employeeAnimalId === specie.id) {
      animalsLocation.push(specie.location);
    }
  }));
  return animalsLocation;
}

const filterByNameOrId = (obj, allEmployees) => {
  const selectedEmployee = allEmployees
    .filter((employee) => employee.fullName.includes(obj.name) || employee.id.includes(obj.id));
    return selectedEmployee;
};

function getEmployeesCoverage(obj) {
  const allEmployees = data.employees.map((employee) => {
    const employeeInfo = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: getAnimalsNames(employee.responsibleFor),
      locations: getAnimalsLocations(employee.responsibleFor),
    };
    return employeeInfo;
  });
  if (obj === undefined) return allEmployees;
  if (obj.id || obj.name) {
    if (filterByNameOrId(obj, allEmployees)[0] !== undefined) {
      return filterByNameOrId(obj, allEmployees)[0];
    }
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
