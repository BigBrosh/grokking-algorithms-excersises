// find shortest weighted path via Dijkstra's algorithm

// Directed Acyclic Graph
const weightedGraph = {
  Begin: {
    A: 6,
    B: 2
  },
  A: {
    End: 1
  },
  B: {
    A: 3,
    End: 5
  }
};

// with vertex with negative value
const weightedGraphForDrums = {
  book: {
    plate: 5,
    poster: 0
  },
  plate: {
    poster: -7
  },
  poster: {
    drums: 35
  }
};

const collectPathInfo = (graph, parent, to, pathInfo = {}) => {
  const currentVertex = graph[parent];

  Object.entries(currentVertex).forEach(([vertex, weight]) => {
    const parentWeight = pathInfo[parent] ? pathInfo[parent].weight : 0;
    const weightWithParent = weight + parentWeight;
    const isVertexDefined = typeof pathInfo[vertex] !== 'undefined';
    const isCurrentWeightLess = isVertexDefined && pathInfo[vertex].weight > weightWithParent;

    if (!isVertexDefined || isCurrentWeightLess) {
      pathInfo[vertex] = { parent, weight: weightWithParent };
    }

    if (vertex !== to) {
      collectPathInfo(graph, vertex, to, pathInfo);
    }
  });

  return pathInfo;
};

const findShortestWeightedPath = (graph, from, to) => {
  const path = [to];
  const pathInfo = collectPathInfo(graph, from, to);
  const totalWeight = pathInfo[to].weight;
  let current = pathInfo[to];

  while (typeof current !== 'undefined') {
    const { parent } = current;

    path.unshift(parent);
    current = pathInfo[parent];
  }

  return { totalWeight, path };
};

console.log(findShortestWeightedPath(weightedGraph, 'Begin', 'End'));
// -> { totalWeight: 6, path: ['Begin', 'B', 'A', 'End'] }

console.log(findShortestWeightedPath(weightedGraphForDrums, 'book', 'drums'));
// -> { totalWeight: 33, path: ['book', 'plate', 'poster', 'drums'] }
