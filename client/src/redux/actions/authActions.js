import * as types from './actionTypes';

const authRequest = () => ({
  type: types.AUTHENTICATION_REQUEST,
});

const authSuccess = (user, token) => ({
  type: types.AUTHENTICATION_SUCCESS,
  user,
  token,
});

const authFailure = (errors) => ({
  type: types.AUTHENTICATION_FAILURE,
  errors,
});

const resetAction = () => ({
  type: types.RESET,
});

export const logout = () => dispatch => {
  localStorage.clear();
  dispatch(resetAction());
  return dispatch({
    type: types.LOGOUT,
  });
};

export const getUser = (credentials) => {
  const request = new Request('/find_user', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify({ user: credentials }),
  });
  return fetch(request)
    .then(response => response.json())
    .then(userJson => userJson)
    .catch(error => error);
};

export const authenticate = (credentials) => dispatch => {
  dispatch(authRequest());
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ auth: credentials }),
  })
    .then(res => res.json())
    .then((response) => {
      const token = response.jwt;
      localStorage.setItem('token', token);
      return getUser(credentials);
    })
    .then((user) => {
      dispatch(authSuccess(user, localStorage.token));
    })
    .catch((errors) => {
      dispatch(authFailure(errors));
      localStorage.clear();
    });
};

export const signUp = (user) => {
  const newUser = user;
  return dispatch => fetch('/sign_up', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }),
  })
    .then(response => response.json())
    .then(() => {
      dispatch(authenticate({
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
      }));
    })
    .catch((errors) => {
      dispatch(authFailure(errors));
    });
};
