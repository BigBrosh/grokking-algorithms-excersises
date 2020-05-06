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

const findShortestPath = (graph, currentVertex, vertexToFind, foundPaths = [], previousPath = []) => {
  const siblingVertexes = graph[currentVertex];

  if (siblingVertexes.length === 0) {
    return foundPaths;
  }

  const path = previousPath.concat(currentVertex);

  if (siblingVertexes.indexOf(vertexToFind) !== -1) {
    foundPaths.push(path.concat([vertexToFind]));
  } else if (foundPaths.length === 0 || foundPaths[0].length > path.length + 1) {
    siblingVertexes.forEach((vertex) => {
      findShortestPath(graph, vertex, vertexToFind, foundPaths, path);
    });
  }

  return foundPaths;
};

console.log(findShortestPath(graph1, 1, 6)); // -> [[1, 2, 6]]
console.log(findShortestPath(graph2, 5, 6)); // -> [[5, 6]]
console.log(findShortestPath(graph3, 1, 6)); // -> [[1, 2, 6], [1, 3, 6]]
console.log(findShortestPath(graph4, 1, 6)); // -> []
