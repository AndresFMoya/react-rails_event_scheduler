import * as types from '../actions/actionTypes';

const initialState = {
  currentFollows: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_EVENT_FOLLOWER:
      return {
        ...state,
        currentFollows: action.user,
      };
    case types.DELETE_EVENT_FOLLOWER:
      return {
        ...state,
        currentFollows: action.user,
      };
    default:
      return state;
  }
};
