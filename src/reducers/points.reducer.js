const initialState = {
  points: []
}

export const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'newPoint':
      let newPoint = action.newPoint;
      newPoint.text = state.points.length + 1;
      return {...state, points: [...state.points, newPoint]}
      break;
    default:
      return state;

  }
}
