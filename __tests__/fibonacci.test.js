const fibonacci = require('../algoritmos/fibonacci');

test('fibonacci n=0', () => {
  expect(fibonacci(0)).toEqual([0]);
});

test('fibonacci n=1', () => {
  expect(fibonacci(1)).toEqual([0, 1]);
});

test('fibonacci n=5', () => {
  expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
});

test('lança se não for número', () => {
  expect(() => fibonacci('5')).toThrow(TypeError);
});

test('lança se for negativo ou não inteiro', () => {
  expect(() => fibonacci(-1)).toThrow(TypeError);
  expect(() => fibonacci(2.5)).toThrow(TypeError);
});

test('fibonacci n=2', () => {
  expect(fibonacci(2)).toEqual([0, 1, 1]);
});

test('fibonacci n=10 - último elemento', () => {
  const seq = fibonacci(10);
  expect(seq.length).toBe(11);
  expect(seq[10]).toBe(55);
});
