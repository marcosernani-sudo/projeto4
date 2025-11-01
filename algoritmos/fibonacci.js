function fibonacci(n) {
  if (typeof n !== 'number') {
    throw new TypeError('O parâmetro deve ser um número');
  }
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('O parâmetro deve ser um inteiro não negativo');
  }

  if (n === 0) return [0];
  const seq = [0, 1];
  for (let i = 2; i <= n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n + 1);
}

module.exports = fibonacci;
