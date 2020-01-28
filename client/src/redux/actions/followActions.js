import * as types from './actionTypes';

const addEventFollower = event => ({
  type: types.ADD_EVENT_FOLLOWER,
  event,
});

const destroyEventFollower = event => ({
  type: types.DELETE_EVENT_FOLLOWER,
  event,
});

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
