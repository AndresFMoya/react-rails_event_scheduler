import * as types from './actionTypes';

const addEventFollower = event => ({
  type: types.ADD_EVENT_FOLLOWER,
  event,
});

const destroyEventFollower = event => ({
  type: types.DELETE_EVENT_FOLLOWER,
  event,
});

const loadEventsFollow = (events) => ({
  type: types.LOAD_EVENTS_FOLLOWED,
  events,
});

export const loadEventsFollowed = (credentials) => dispatch => {
  const request = new Request('/find_user_events', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify({ user: credentials }),
  });
  return fetch(request)
    .then(response => response.json())
    .then(response => dispatch(loadEventsFollow(response)))
    .catch(error => error);
};

export const createEventFollower = eventId => (dispatch) => fetch('/api/v1/event_followers', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${localStorage.token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ event_id: eventId }),
})
  .then(response => response.json())
  .then(event => {
    dispatch(addEventFollower(event));
  })
  .catch(error => (error));

export const deleteEventFollower = eventId => (dispatch) => fetch('/api/v1/event_followers', {
  method: 'DELETE',
  headers: {
    Authorization: `Bearer ${localStorage.token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ event_id: eventId }),
})
  .then(response => response.json())
  .then(event => {
    dispatch(destroyEventFollower(event));
  })
  .catch(error => (error));
