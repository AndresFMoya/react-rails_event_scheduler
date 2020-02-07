import * as types from '../actions/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_EVENTS_FOLLOWED:
      return action.events;
    case types.ADD_EVENT_FOLLOWER:
      return [...state, action.event];
    case types.DELETE_EVENT_FOLLOWER:
      return state.filter(data => data.event_id !== action.event.event_id);
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
