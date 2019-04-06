import { appendPointToAdjacencyMatrix, getDistanceBetweenTwoPoints, createDijkstraPath } from './../helpers';

const initialState = {
  points: [{x: 231, y: 97, text: 0},
{x: 600, y: 543, text: 1},
{x: 807, y: 308, text: 2}],
  selectedPoints: [],
  adjacencyMatrix: [
    [1, 579, -1],
    [579, 1, 313],
    [-1, 313, 1]
  ]
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

      if (action.mode === 'connectPoints') {

        if (newSelectedPoints.length === 2) {
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

      }

      else if (mode === 'createPath') {
        if (newSelectedPoints.length === 2) {
          createDijkstraPath([[{ text: newSelectedPoints[0], distance: 1}]], newSelectedPoints[1], adjacencyMatrix);
        }
      }

      return {...state, selectedPoints: newSelectedPoints}




    default:
      return state;

  }
}
