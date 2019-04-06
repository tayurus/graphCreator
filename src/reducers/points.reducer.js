import { appendPointToAdjacencyMatrix, getDistanceBetweenTwoPoints } from './../helpers';

const initialState = {
  points: [],
  selectedPoints: [],
  adjacencyMatrix: []
}

export const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'newPoint':
      let newPoint = {...action.newPoint};
      newPoint.text = state.points.length;
      return {...state,
              points: [...state.points, newPoint],
              adjacencyMatrix: appendPointToAdjacencyMatrix(state.adjacencyMatrix)
             }

    case 'selectPoint':
      let newSelectedPoints = [...state.selectedPoints];
      newSelectedPoints.push(action.pointText);

      if (newSelectedPoints.length === 2) {
        const [first, second] = newSelectedPoints;
        const newAdjacencyMatrix = [...state.adjacencyMatrix];
        const firstPoint = state.points[first];
        const secondPoint = state.points[second];
        const distance = getDistanceBetweenTwoPoints(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y)
        newAdjacencyMatrix[first][second] = distance;
        newAdjacencyMatrix[second][first] = distance;

        return {...state,
          selectedPoints:[],
          adjacencyMatrix: newAdjacencyMatrix
         }
      }

      return {...state, selectedPoints: newSelectedPoints}


    default:
      return state;

  }
}
