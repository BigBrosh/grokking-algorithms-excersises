const factorial = (x) => x === 1 ? 1 : x * factorial(--x);

// preventing from stack overflow via tail recursion
const tailFactorial = (x, res = 1) => x === 1 ? res : tailFactorial(x - 1, res * x);

const trampolineFactorialBasic = (x, res = 1) => x === 1 ? res : () => trampolineFactorialBasic(x - 1, res * x);

// trampoline implementation for preventing from stack overflow
const trampoline = (func) => {
  return (...args) => {
    let result = func(...args);

    while (typeof result === 'function') {
      result = result();
    }

    return result;
  };
}


const trampolineFactorial = trampoline(trampolineFactorialBasic);

console.log('factorial');
console.log(factorial(1)); // -> 1
console.log(factorial(3)); // -> 6
console.log(factorial(4)); // -> 24

console.log('tailFactorial');
console.log(tailFactorial(1)); // -> 1
console.log(tailFactorial(3)); // -> 6
console.log(tailFactorial(4)); // -> 24

console.log('trampolineFactorial');
console.log(trampolineFactorial(1)); // -> 1
console.log(trampolineFactorial(3)); // -> 6
console.log(trampolineFactorial(4)); // -> 24
