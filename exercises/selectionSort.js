const smallestIndex = (array) => {
  let smallest = null;
  let smallestIndex = null;
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    if (smallest === null || array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = (array) => {
  const sorted = [];

  while (array.length !== 0) {
    sorted.unshift(array.splice(smallestIndex(array), 1)[0]);
  }

  return sorted;
}

console.log(selectionSort([])); // -> []
console.log(selectionSort([0])); // -> [0]
console.log(selectionSort([3, 2, 5, 6, 1])); // -> [6, 5, 3, 2, 1]
