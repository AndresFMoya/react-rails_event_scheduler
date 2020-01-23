import { LOAD_EVENTS } from './actionTypes';
import { LOAD_EVENTS_FOLLOWERS } from "./actionTypes";

const loadEvents = (events) => ({ type: LOAD_EVENTS, events });
const loadEventsFollowers = (events_followers) => ({ type: LOAD_EVENTS_FOLLOWERS, events_followers });

export default loadEvents;
