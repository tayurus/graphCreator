export const createDijkstraPath = (paths, end, adjacencyMatrix) => {
  let newPaths = [];
  let oldPathsLength = paths.reduce( (acc, path) => path.length );

  paths.forEach((path, pathIndex) => {

    if (!isPointInPath(path, end)) {
      const lastPointInVisited = path[path.length - 1];
      for (let i = 0; i < adjacencyMatrix.length; i++) {
        if (adjacencyMatrix[lastPointInVisited.text][i] > 1 && !isPointInPath(path, i)) {
          newPaths[newPaths.length] = [...path];
          newPaths[newPaths.length - 1].push({
            text: i,
            distance: adjacencyMatrix[lastPointInVisited.text][i]
          });
        }
      }

    } else {
      newPaths.push(path);
    }

  })



  let newPathsLength  = newPaths.reduce( (acc, path) => path.length );

  if (oldPathsLength === newPathsLength) {
    return newPaths.sort(sortPaths)[0];
  } else {
    return createDijkstraPath(newPaths, end, adjacencyMatrix);
  }

}

function sortPaths(path1,path2) {
  const path1Length = path1.reduce( (acc, item) => acc + item.distance, 0 );
  const path2Length = path2.reduce( (acc, item) => acc + item.distance, 0 );
  return path1Length - path2Length;
}

const isPointInPath = (path, pointIndex) => {
  return path.some(item => item.text === pointIndex)
}
