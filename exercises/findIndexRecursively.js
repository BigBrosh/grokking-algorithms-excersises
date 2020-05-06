// combination of recursion with binary search
const findIndexRecursively = (array, elementToFind) => {
  let high = array.length;
  let low = 0;
  const mid = Math.floor((high + low) / 2);

  if (array[mid] === elementToFind) {
    return mid;
  } else if (typeof array[0] === 'undefined') {
    return -1;
  } else {
    if (array[mid] < elementToFind) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

    return findIndexRecursively(array.slice(low, high + 1), elementToFind);
  }
};

console.log(findIndexRecursively([1], 1)); // -> 0
console.log(findIndexRecursively([1, 2, 3], 4)); // -> -1
console.log(findIndexRecursively([1, 2, 3], 2)); // -> 1
