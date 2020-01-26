import { LOAD_EVENTS_FOLLOWERS } from '../actions/actionTypes';

const eventsFollowersReducer = (state = false, action) => {
  switch (action.type) {
    case LOAD_EVENTS_FOLLOWERS:
      return action.events_followers;
    default:
      return state;
  }
};

export default eventsFollowersReducer;
