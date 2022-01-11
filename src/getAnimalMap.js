const { species } = require('../data/zoo_data');

const todosEspecies = (regions) => species.reduce((acc, { location: local, name }) => {
  acc[local].push(name);
  return acc;
}, regions);

const todosNames = (regions, p = { sex: false }) => species.reduce((acc, curr) => {
  const { sex, sorted } = p;
  const { location: local, name: nome, residents } = curr;
  const names = residents.reduce((ac, cur) => {
    if (!sex) {
      ac.push(cur.name);
      return ac;
    }
    if (cur.sex === sex) ac.push(cur.name);
    return ac;
  }, []);
  if (sorted === true) {
    acc[local].push({ [nome]: names.sort() });
    return acc;
  }
  acc[local].push({ [nome]: names });
  return acc;
}, regions);

const optionsIncud = (regions, options) => {
  const { sex, sorted } = options;
  if (sex && sorted) return todosNames(regions, options);
  if (sorted === true) return todosNames(regions, options);
  if (sex) return todosNames(regions, options);
  return todosNames(regions);
};

function getAnimalMap(options) {
  const regions = { NE: [], NW: [], SE: [], SW: [] };
  if (!options) return todosEspecies(regions);
  if (options.includeNames) {
    return optionsIncud(regions, options);
  }
  return todosEspecies(regions);
}

module.exports = getAnimalMap;
