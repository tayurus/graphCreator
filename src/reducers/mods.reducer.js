
const initialState = {
  mode: 'createPoint'
}

export const modsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changeMode':
      return {
        mode: action.mode
      }

    default:
      return state;
  }
}
