const initialState = {
  currentUser: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FOLLOW_EVENT':
      return { ...state, currentUser: action.payload }
    default:
      return state;
  }
}