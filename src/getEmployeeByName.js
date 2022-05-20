const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  let objectEmployee = {};
  employees.forEach((employee) => {
    const { firstName, lastName } = employee;
    if (employeeName === firstName || employeeName === lastName) {
      objectEmployee = employee;
    }
  });
  return objectEmployee;
}

module.exports = getEmployeeByName;
