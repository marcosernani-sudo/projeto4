const isPrimo = require('../algoritmos/isPrimo');

test('lança se não for número', () => {
  expect(() => isPrimo('7')).toThrow(TypeError);
});

test('retorna false para números menores que 2', () => {
  expect(isPrimo(1)).toBe(false);
  expect(isPrimo(0)).toBe(false);
});

test('identifica primos corretamente', () => {
  expect(isPrimo(2)).toBe(true);
  expect(isPrimo(17)).toBe(true);
  expect(isPrimo(18)).toBe(false);
});

test('número negativo retorna false', () => {
  expect(isPrimo(-7)).toBe(false);
});

test('primo maior', () => {
  expect(isPrimo(97)).toBe(true);
});
