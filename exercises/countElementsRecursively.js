const countElementsRecursively = (array, count = 0) => {
  return typeof array[0] === 'undefined' ? count : countElementsRecursively(array.slice(1), ++count);
};

console.log(countElementsRecursively([])); // -> 0
console.log(countElementsRecursively([1, 2])); // -> 2
