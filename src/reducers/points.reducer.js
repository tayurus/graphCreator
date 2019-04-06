import { appendPointToAdjacencyMatrix, getDistanceBetweenTwoPoints, createDijkstraPath } from './../helpers';

const initialState = {
  points: [],
  selectedPoints: [],
  adjacencyMatrix: [],
  pathPairs: []
}

export const pointsReducer = (state = initialState, action) => {

  const { points, adjacencyMatrix, selectedPoints } =  state;
  const { mode } = action;

  switch (action.type) {
    case 'newPoint':
      let newPoint = {...action.newPoint};
      newPoint.text = points.length;
      return {...state,
              points: [...points, newPoint],
              adjacencyMatrix: appendPointToAdjacencyMatrix(adjacencyMatrix)
             }

    case 'selectPoint':

      let newSelectedPoints = [...selectedPoints];
      newSelectedPoints.push(action.pointText);

      if (newSelectedPoints.length === 2) {
        if (action.mode === 'connectPoints') {
            const [first, second] = newSelectedPoints;
            const newAdjacencyMatrix = [...adjacencyMatrix];
            const firstPoint = points[first];
            const secondPoint = points[second];
            const distance = getDistanceBetweenTwoPoints(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y)
            newAdjacencyMatrix[first][second] = distance;
            newAdjacencyMatrix[second][first] = distance;

            return {...state,
              selectedPoints:[],
              adjacencyMatrix: newAdjacencyMatrix
             }
          }

        if (mode === 'createPath') {
          if (newSelectedPoints.length === 2) {
            const path = createDijkstraPath([[{ text: newSelectedPoints[0], distance: 1}]], newSelectedPoints[1], adjacencyMatrix);
            const pathPairs = [];
            for (let i = 0; i < path.length - 1; i++) {
              pathPairs.push([points[path[i].text], points[path[i + 1].text]])
            }
            return {...state, selectedPoints: [], pathPairs}
          }


        }
      }




      return {...state, selectedPoints: newSelectedPoints}




    default:
      return state;

  }
}
