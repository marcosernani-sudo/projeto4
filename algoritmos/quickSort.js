function quickSort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('O parâmetro deve ser um array');
  }
  if (arr.some((v) => typeof v !== 'number')) {
    throw new TypeError('O array deve conter apenas elementos numéricos');
  }

  // Implementação não destrutiva
  const a = arr.slice();

  function qs(left, right) {
    if (left >= right) return;
    const pivot = a[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
      while (a[i] < pivot) i++;
      while (a[j] > pivot) j--;
      if (i <= j) {
        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
        i++;
        j--;
      }
    }
    if (left < j) qs(left, j);
    if (i < right) qs(i, right);
  }

  qs(0, a.length - 1);
  return a;
}

module.exports = quickSort;
