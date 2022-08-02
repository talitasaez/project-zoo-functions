const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const soma = entrants.reduce((acc, { age }) => {
    if (age < 18) {
      acc.child += 1;
    }
    if (age >= 18 && age < 50) {
      acc.adult += 1;
    }
    if (age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });

  return soma;
}

// Realize a soma da quantidade de visitantes por faixa etária;
// Retorne um objeto em um formato como esse: { child: 3, adult: 2, senior: 1 }.
function calculateEntry(entrants) {
  // seu código aqui
  // teste
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const contagem = countEntrants(entrants);
  return contagem.child * 20.99 + contagem.adult * 49.99 + contagem.senior * 24.99;
}

module.exports = { calculateEntry, countEntrants };
