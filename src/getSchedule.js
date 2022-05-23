const data = require('../data/zoo_data');

const { species } = data;
const names = species.map((element) => element.name);
const availability = species.map((element) => element.availability);
const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const animalNameParameter = (scheduleTarget) => {
  let availabilityOfAnimals;
  names.forEach((element, index) => {
    if (element === scheduleTarget) {
      availabilityOfAnimals = availability[index];
    }
  });
  return availabilityOfAnimals;
};

const weekDayParameter = (day) => {
  const obj = {};
  const animals = [];
  species.forEach((element) => {
    if (element.availability.includes(day) === true) {
      animals.push(element.name);
    }
  });
  if (day === 'Monday') {
    obj[day] = {
      officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
    };
    return obj;
  }
  obj[day] = {
    officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
    exhibition: animals,
  };
  return obj;
};

// eslint-disable-next-line max-lines-per-function
const otherParameters = () => {
  const obj = {};
  const animals = [];
  weekDays.forEach((day) => {
    if (day === 'Monday') {
      obj[day] = {
        officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
      };
      return obj;
    }
    obj[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: animals,
    };
  });
  return obj;
};

function getSchedule(scheduleTarget) {
  if (names.includes(scheduleTarget)) {
    return animalNameParameter(scheduleTarget);
  }
  if (weekDays.includes(scheduleTarget)) {
    return weekDayParameter(scheduleTarget);
  }
  return otherParameters();
}

console.log(getSchedule());

module.exports = getSchedule;
