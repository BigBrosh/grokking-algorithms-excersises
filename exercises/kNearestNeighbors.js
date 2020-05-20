const reviews = {
  1: [17, 37], 2: [26, 68], 3: [33, 3], 4: [32, 20], 5: [32, 40],
  6: [20, 43], 7: [33, 83], 8: [19, 19], 9: [40, 19], 10: [27, 50],
  11: [35, 69], 12: [30, 84], 13: [35, 25], 14: [21, 47], 15: [35, 60],
  16: [38, 70], 17: [24, 73], 18: [27, 74], 19: [29, 11], 20: [25, 91],
  21: [21, 14], 22: [28, 1], 23: [30, 75], 24: [32, 36], 25: [17, 97]
};

const targetUser = (id, statistic) => [id, statistic[id]];

const CosSimilarity = ([targetAge, targetReview], [age, review]) => {
  const numerator = (targetAge * age) + (targetReview * review);
  const denominator = Math.sqrt(targetAge ** 2 + targetReview ** 2) * Math.sqrt(age  ** 2 + review ** 2);

  return numerator / denominator;
};

const EuclidMetric = ([targetAge, targetReview], [age, review]) => {
  return Math.sqrt(((targetAge - age) ** 2) + ((targetReview - review) ** 2));
};

const kNearestNeighbors = (calculateDistance) => (targetId, statistic, k) => {
  const distances = [];
  const target = targetUser(targetId, statistic);

  Object.entries(statistic).forEach(([userId, reviewData]) => {
    if (userId != targetId) {
      distances.push([calculateDistance([target[1][0], target[1][1]], reviewData), userId]);
    }
  });

  return distances
    .sort((a, b) => a[0] > b[0] ? 1 : -1)
    .slice(0, k);
};

const EuclidKNearestNeighbors = kNearestNeighbors(EuclidMetric);

console.log(EuclidKNearestNeighbors(1, reviews, 5));

/* [
  [6.708203932499369, "6"],
  [10.770329614269007, "14"],
  [15.033296378372908, "24"],
  [15.297058540778355, "5"],
  [16.401219466856727, "10"]
]*/

const CosKNearestNeighbors = kNearestNeighbors(CosSimilarity);

console.log(CosKNearestNeighbors(1, reviews, 5));
/*
  [0.4496662304337496, "22"],
  [0.4980533205262339, "3"],
  [0.7126277177960421, "19"],
  [0.7669925051686782, "9"],
  [0.8356372015028272, "4"]
*/
