import { LOAD_EVENTS } from '../actions/actionTypes';

function eventsReducer(state = [], action) {
  switch (action.type) {
    case LOAD_EVENTS:
      return action.events;
    default:
      return state;
  }
}

export default eventsReducer;
