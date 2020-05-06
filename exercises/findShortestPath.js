// find shortest path from begin to specified vertex in graphs
const graph1 = {
  1: [2, 3],
  2: [4, 6],
  3: [4, 5],
  4: [],
  5: [6],
  6: []
};

const graph2 = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [6],
  6: []
};

const graph3 = {
  1: [2, 3],
  2: [4, 6],
  3: [4, 5, 6],
  4: [],
  5: [],
  6: []
};

const graph4 = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
  6: []
};

const filterBySmallestLength = (array) => {
  let smallestLength = null;
  let filteredArray = [];

  for (let path of array) {
    if (smallestLength === null || path.length < smallestLength) {
      smallestLength = path.length;
      filteredArray = [path];
    } else if (path.length === smallestLength) {
      filteredArray.push(path);
    }
  }

  return filteredArray;
};

const findAllPaths = (graph, currentVertex, vertexToFind, foundPaths = [], previousPath = []) => {
  const sublingVertexes = graph[currentVertex];

  if (sublingVertexes.length === 0) {
    return foundPaths;
  }

  const path = previousPath.concat(currentVertex);

  if (sublingVertexes.indexOf(vertexToFind) !== -1) {
    foundPaths.push(path.concat([vertexToFind]));
  } else {
    sublingVertexes.forEach((vertex) => {
      findAllPaths(graph, vertex, vertexToFind, foundPaths, path);
    });
  }

  return foundPaths;
};

const findShortestPath = (graph, initialVertex, vertexToFind) => {
  const allPaths = findAllPaths(graph, initialVertex, vertexToFind);
  return filterBySmallestLength(allPaths);
};

console.log(findShortestPath(graph1, 1, 6)); // -> [[1, 2, 6]]
console.log(findShortestPath(graph2, 5, 6)); // -> [[5, 6]]
console.log(findShortestPath(graph3, 1, 6)); // -> [[1, 2, 6], [1, 3, 6]]
console.log(findShortestPath(graph4, 1, 6)); // -> []
