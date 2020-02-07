import * as types from './actionTypes';

const loadEvents = (events) => ({
  type: types.LOAD_EVENTS,
  events,
});

export default loadEvents;
