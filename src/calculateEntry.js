const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const quantityOfEntrants = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      quantityOfEntrants.child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      quantityOfEntrants.adult += 1;
    }
    if (element.age >= 50) {
      quantityOfEntrants.senior += 1;
    }
  });
  return quantityOfEntrants;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  let total = 0;
  const object = countEntrants(entrants);
  const values = Object.values(object);
  total = (values[0] * 20.99) + (values[1] * 49.99) + (values[2] * 24.99);
  return total;
}

calculateEntry({});

module.exports = { calculateEntry, countEntrants };
