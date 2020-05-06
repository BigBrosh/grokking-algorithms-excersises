const findMaxRecursively = (array, max = null) => {
  return array.length === 0 ? max : findMaxRecursively(array, Math.max(max, array.pop()));
};

console.log(findMaxRecursively([])); // -> null
console.log(findMaxRecursively([1, 3, 2])); // -> 3
console.log(findMaxRecursively([1, 3, 2, 100])); // -> 100
