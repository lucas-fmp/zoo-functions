const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna 4 quando passado "count" como parâmetro da função', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Retorna um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Retorna um número proximo a 10.5 quando o argumento passador for averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
