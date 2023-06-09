const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const minAge = species.find((specie) => specie.name === animal);
  return minAge.residents.every((resident) => resident.age >= age);
  // seu código aqui
}
console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;

// 2. Implemente a função getAnimalsOlderThan.
// Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.

// Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:
// Os animais devem ter essa idade ou serem mais velhos.

// retorne um valor booleano.

// O que será testado:

// A função, ao receber uma espécie e uma idade como parâmetros, deve testar se todos os animais desta espécie possuem a idade mínima especificada.
