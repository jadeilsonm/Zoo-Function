const data = require('../data/zoo_data');

// const regions = species.reduce((acc, curr) => {
//   const { location: local } = curr;
//   if (!acc[local]) acc[local] = [];
//   return acc;
// }, {});

// const todosNomes = () => species.reduce((acc, curr) => {
//   const { location: local, name } = curr;
//   acc[local].push(name);
//   return acc;
// }, regions);

// const incluidName = () => species.reduce((acc, curr) => {
//   const { location: local, name: nome, residents } = curr;
//   const names = residents.reduce((ac, cur) => [...ac, cur.name], []);
//   acc[local].push({ [nome]: names });
//   return acc;
// }, regions);

function getAnimalMap(options) {
  // if (options) {
  //   const { sex, sorted, includeNames } = options;
  //   if (sex === 'female' || sex === 'female' && sorted === true) return todosNomes();
  //   if (includeNames === true) {
  //     return incluidName();
  //   }
  // }
  // return todosNomes();
}
// console.log(getAnimalMap({ sex: 'female' }));
module.exports = getAnimalMap;
