const data = require('../data/zoo_data');

const { employees } = data;
const managersIdObject = {
  stephanieId: '9e7d4524-363c-416a-8759-8aa7e50c0992',
  olaId: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  burlId: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
  emeryId: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
};
const managersId = Object.values(managersIdObject);

function isManager(id) {
  if (managersId.includes(id) === true) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const relatedEmployees = [];
    const objFilter = employees.filter((element) => element.managers.includes(managerId) === true);
    objFilter.forEach((element2) => {
      relatedEmployees.push(`${element2.firstName} ${element2.lastName}`);
    });
    return relatedEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
