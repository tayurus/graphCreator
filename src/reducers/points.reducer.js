import { appendPointToAdjacencyMatrix } from './../helpers';

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
      let newSelectedPoints = JSON.parse(JSON.stringify(state.selectedPoints));
      newSelectedPoints.push(action.pointText);

      if (newSelectedPoints.length === 2) {
        const [first, second] = newSelectedPoints;
        const newAdjacencyMatrix = [...state.adjacencyMatrix];
        newAdjacencyMatrix[first][second] = 1;
        newAdjacencyMatrix[second][first] = 1;

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
