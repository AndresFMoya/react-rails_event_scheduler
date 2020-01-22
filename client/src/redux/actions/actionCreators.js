import { LOAD_EVENTS } from './actionTypes';

export function loadEvents(events) {
  return { type: LOAD_EVENTS, events: events };
}
