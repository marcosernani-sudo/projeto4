function contagem(inicio, fim) {
  if (typeof inicio !== 'number' || typeof fim !== 'number') {
    throw new TypeError('Os parâmetros inicio e fim devem ser números');
  }
  if (!Number.isInteger(inicio) || !Number.isInteger(fim)) {
    throw new TypeError('Os parâmetros inicio e fim devem ser inteiros');
  }
  if (inicio > fim) {
    throw new RangeError('O início não pode ser maior que o fim');
  }

  const resultado = [];
  for (let i = inicio; i <= fim; i++) {
    resultado.push(i);
  }
  return resultado;
}

module.exports = contagem;
