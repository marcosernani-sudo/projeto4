const quickSort = require('../algoritmos/quickSort');

test('ordena array', () => {
  expect(quickSort([3, 1, 2])).toEqual([1, 2, 3]);
});

test('array vazio', () => {
  expect(quickSort([])).toEqual([]);
});

test('lança se não for array', () => {
  expect(() => quickSort('not array')).toThrow(TypeError);
});

test('lança se elementos não numéricos', () => {
  expect(() => quickSort([1, '2', 3])).toThrow(TypeError);
});

test('já ordenado permanece igual', () => {
  expect(quickSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test('ordena com duplicados', () => {
  expect(quickSort([3, 1, 2, 3])).toEqual([1, 2, 3, 3]);
});
