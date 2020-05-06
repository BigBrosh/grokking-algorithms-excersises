const sumViaRecursion = (array, sum = 0) => {
  return array.length === 0 ? sum : sumViaRecursion(array, sum + array.pop());
};

console.log(sumViaRecursion([])); // -> 0
console.log(sumViaRecursion([1, 2])); // -> 3
