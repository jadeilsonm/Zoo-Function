const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return species.filter((specie) => ids.some((i) => i === specie.id));
}

module.exports = getSpeciesByIds;
