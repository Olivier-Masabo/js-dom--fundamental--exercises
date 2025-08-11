function sortByValue(obj) {
  return Object.fromEntries(Object.entries(obj).sort((a, b) => a[1] - b[1]));
}

const products = { avocado: 250, banana: 550, lemon: 100 };

console.log(sortByValue(products));