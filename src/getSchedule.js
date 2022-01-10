const { hours, species } = require('../data/zoo_data');

const semParametros = () =>
  Object.keys(hours).reduce((acc, curr) => {
    const { open, close } = hours[curr];
    const list = [];
    species.forEach((Element) => {
      if (Element.availability.includes(curr)) list.push(Element.name);
    });
    if (curr !== 'Monday') {
      acc[curr] = { officeHour: `Open from ${open}am until ${close}pm`, exhibition: list };
    }
    if (curr === 'Monday') {
      acc[curr] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
    return acc;
  }, {});

const getAnimais = (name) => species.find((el) => el.name === name).availability;

function getSchedule(scheduleTarget) {
  const Dias = Object.keys(hours);
  const Animais = [];
  species.forEach((Element) => {
    Animais.push(Element.name);
  });
  if (!scheduleTarget || (!Animais.includes(scheduleTarget) && !Dias.includes(scheduleTarget))) {
    return semParametros();
  }
  if (Dias.includes(scheduleTarget)) {
    const days = semParametros();
    const obj = {};
    obj[scheduleTarget] = days[scheduleTarget];
    return obj;
  }
  return getAnimais(scheduleTarget);
}

module.exports = getSchedule;
