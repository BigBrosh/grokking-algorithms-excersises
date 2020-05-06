const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  } else {
    const low = [];
    const basic = array[0];
    const high = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] < basic) {
        low.push(array[i]);
      } else {
        high.push(array[i]);
      }
    }

    return quickSort(low).concat([basic]).concat(quickSort(high));
  }
};

console.log(quickSort([])); // -> []
console.log(quickSort([1])); // -> [1]
console.log(quickSort([1, 3, 2])); // -> [1, 2, 3]
console.log(quickSort([1, 3, 2, 1])); // -> [1, 1, 2, 3]
