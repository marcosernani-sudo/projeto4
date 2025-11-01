const contagem = require('../algoritmos/contagem');

test('contagem básica', () => {
  expect(contagem(1, 5)).toEqual([1, 2, 3, 4, 5]);
});

test('lança se parâmetros não forem números', () => {
  expect(() => contagem('1', 5)).toThrow(TypeError);
});

test('lança se parâmetros não forem inteiros', () => {
  expect(() => contagem(1.2, 5)).toThrow(TypeError);
});

test('lança se inicio > fim', () => {
  expect(() => contagem(5, 1)).toThrow(RangeError);
});

test('inicio igual a fim', () => {
  expect(contagem(3, 3)).toEqual([3]);
});

test('contagem com negativos', () => {
  expect(contagem(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
});
