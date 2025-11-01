function mdc(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Os parâmetros devem ser números');
  }
  if (a === 0 && b === 0) {
    throw new Error('MDC indefinido para ambos zeros');
  }

  // algoritmo de Euclides (valores absolutos)
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}

module.exports = mdc;
