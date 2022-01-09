const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const base = { child: 0, adult: 0, senior: 0 };
  return entrants.reduce((acc, curr) => {
    if (curr.age < 18) {
      acc.child += 1;
    } else if (curr.age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  }, base);
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) return 0;
  const result = countEntrants(entrants);
  if (result.length === 0) return 0;
  const { child, adult, senior } = result;
  const { child: childPrice, adult: adultPrice, senior: seniorPrice } = prices;
  return child * childPrice + adult * adultPrice + senior * seniorPrice;
}
module.exports = { calculateEntry, countEntrants };
