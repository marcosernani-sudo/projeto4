function somatorio(n) {
  if (typeof n !== 'number') {
    throw new TypeError('O parâmetro deve ser um número');
  }
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('O parâmetro deve ser um inteiro não negativo');
  }

  // soma de 1 até n (n=0 => 0)
  return (n * (n + 1)) / 2;
}

module.exports = somatorio;
