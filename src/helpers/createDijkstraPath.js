export const createDijkstraPath = (paths, end, adjacencyMatrix) => {
  let newPaths = [];

  paths.forEach((path, pathIndex) => {

    if (!isPointInPath(path, end)) {
      const lastPointInVisited = path[path.length - 1];
      for (let i = 0; i < adjacencyMatrix.length; i++) {
        if (adjacencyMatrix[lastPointInVisited.text][i] > 1 && !isPointInPath(path, i)) {
          newPaths[newPaths.length] = [...paths[pathIndex]];
          newPaths[newPaths.length - 1].push({
            text: i,
            distance: adjacencyMatrix[lastPointInVisited.text][i]
          });
        }
      }
    }

  })

  if (isEndFinded(newPaths, end, adjacencyMatrix)) {
    console.log(newPaths);
    return newPaths;
  } else {
    createDijkstraPath(newPaths, end, adjacencyMatrix);
  }

}

const isPointInPath = (path, pointIndex) => {
  return path.some(item => item.text === pointIndex)
}

const isEndFinded = (paths, end, adjacencyMatrix) => {
  return paths.every(path => path.length === adjacencyMatrix.length);
}

// [[{text: 0, distance: 1}]]
//
// [{text: 1, distance: 463}, {text: 5, distance: 210}];

// [start, ..., end];
