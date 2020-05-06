// multiply array entries with each other
const multiplyArrayEntries = (array, multipliers = null) => {
  multipliers = multipliers === null ? array.slice() : multipliers;

  if (multipliers.length === 0) {
    return array;
  } else {
    array = array.map(multiplyWith(multipliers.pop()));
    return multiplyArrayEntries(array, multipliers);
  }
};

const multiplyWith = (basic) => (element) => basic * element;

console.log(multiplyArrayEntries([])); // -> []
console.log(multiplyArrayEntries([0])); // -> [0]
console.log(multiplyArrayEntries([2, 3])); // -> [12, 18]
