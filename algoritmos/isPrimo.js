function isPrimo(n) {
  if (typeof n !== 'number') {
    throw new TypeError('O parâmetro deve ser um número');
  }
  if (!Number.isInteger(n) || n < 2) return false;

  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const limite = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limite; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = isPrimo;
