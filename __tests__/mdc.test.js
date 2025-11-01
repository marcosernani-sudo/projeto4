const mdc = require('../algoritmos/mdc');

test('mdc básico', () => {
  expect(mdc(48, 18)).toBe(6);
});

test('mdc com zero', () => {
  expect(mdc(0, 5)).toBe(5);
  expect(mdc(5, 0)).toBe(5);
});

test('lança se ambos zeros', () => {
  expect(() => mdc(0, 0)).toThrow(Error);
});

test('lança se parâmetros não forem números', () => {
  expect(() => mdc('3', 6)).toThrow(TypeError);
});

test('mdc com negativos', () => {
  expect(mdc(-48, 18)).toBe(6);
});

test('mdc de números primos relativos', () => {
  expect(mdc(14, 15)).toBe(1);
});
