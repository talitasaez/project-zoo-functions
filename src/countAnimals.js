const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const animalIndefinido = data.species.reduce((acc, element) => {
      acc[element.name] = element.residents.length;
      return (acc);
    }, {});
    return animalIndefinido;
  }
  if (animal.specie && !animal.sex) {
    const especie = data.species.find((element) => element.name === animal.specie);
    const residentes = especie.residents.length;
    return residentes;
  }
  const sexo = data.species.find((element) => element.name === animal.specie);
  const residentes = sexo.residents.filter((element) => element.sex === animal.sex);
  return residentes.length;
}

// formato do parametro : {specie: 'penguins'}
// fomato do parametro : { specie: 'giraffes', sex: 'female' }

// antes de contar o numero dos residentes eu tenho filtar um dos sexos
module.exports = countAnimals;
