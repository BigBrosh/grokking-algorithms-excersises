const getWeight = (weights, i, j) => weights[i] && weights[i][j] || 0;

const longestSubString = (str1, str2) => {
  const stringWeights = [];

  for (let i = 0; i < str1.length; i++) {
    stringWeights[i] = [];

    for (let j = 0; j < str2.length; j++) {
      stringWeights[i][j] = str1[i] === str2[j]
        ? getWeight(stringWeights, i - 1, j - 1) + 1
        : Math.max(
          getWeight(stringWeights, i, j - 1),
          getWeight(stringWeights, i - 1, j)
        );
    }
  }

  return stringWeights.pop().pop();
};

console.log(longestSubString('blue', 'clues')); // -> 3
