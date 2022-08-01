const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson;', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Para o argumento averageAge deve retornar um número próximo a 10.5;', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants('')).toBeNull();
  });

  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('', () => {
    expect(handlerElephants('location')).toEqual(('NW'));
  });

  it('', () => {
    expect(handlerElephants({})).toEqual(('Parâmetro inválido, é necessário uma string'));
  });
});

module.exports = handlerElephants;
