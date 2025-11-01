const somatorio = require('../algoritmos/somatorio');

test('somatorio básico', () => {
  expect(somatorio(5)).toBe(15);
});

test('somatorio zero', () => {
  expect(somatorio(0)).toBe(0);
});

test('lança se não for número', () => {
  expect(() => somatorio('5')).toThrow(TypeError);
});

test('lança se não for inteiro ou for negativo', () => {
  expect(() => somatorio(-1)).toThrow(TypeError);
  expect(() => somatorio(2.5)).toThrow(TypeError);
});

test('somatorio n=1', () => {
  expect(somatorio(1)).toBe(1);
});

test('somatorio n=100', () => {
  expect(somatorio(100)).toBe(5050);
});
