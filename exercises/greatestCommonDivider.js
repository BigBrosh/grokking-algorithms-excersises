// Euclidean algorithm
const greatestCommonDivider = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};


console.log(greatestCommonDivider(1680, 640)); // -> 80
