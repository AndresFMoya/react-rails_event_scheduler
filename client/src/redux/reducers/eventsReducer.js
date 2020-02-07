import * as types from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.LOAD_EVENTS:
      return action.events;
    default:
      return state;
  }
};
