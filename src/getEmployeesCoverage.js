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
    const selectedEmployee = allEmployees
      .filter((employee) => employee.fullName.includes(obj.name) || employee.id.includes(obj.id));
    if (selectedEmployee[0] !== undefined) return selectedEmployee[0];
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
