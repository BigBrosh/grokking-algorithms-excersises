// generate an array with sequence from 1 to 20
const array = Array(20).fill(0).map((_, index) => index + 1);

const binarySearch = (array, elementToFind) => {
  let low = 0;
  let high = array.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const current = array[mid];

    if (current === elementToFind) {
      return mid;
    }

    if (current > elementToFind) {
      high = mid - 1;
    } else if (current < elementToFind) {
      low = mid + 1;
    }
  }

  return -1;
};

console.log(binarySearch(array, -1)); // -1
console.log(binarySearch(array, 0)); // -1
console.log(binarySearch(array, 1)); // 0
console.log(binarySearch(array, 10)); // 9
console.log(binarySearch(array, 20)); // 19
