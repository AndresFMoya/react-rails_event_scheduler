import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signUp } from '../redux/actions/authActions';
import './Login.scss';

const SignUp = (props) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setState({
        username: value,
        password: state.password,
        email: state.email,
      });
    }
    if (name === 'password') {
      setState({
        username: state.username,
        password: value,
        email: state.email,
      });
    }
    if (name === 'email') {
      setState({
        username: state.username,
        password: state.password,
        email: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.signUp(state)) {
      props.history.push('/');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="title">Sign Up</h1>
        <input
          className="form-Control mt-2 w-100"
          id="formControlsUsername"
          type="text"
          name="username"
          placeholder="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          className="form-Control mt-2 w-100"
          id="formControlsEmail"
          type="email"
          name="email"
          placeholder="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          className="form-Control mt-2 w-100"
          id="formControlsPassword"
          type="password"
          name="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
        />
        <div className="submissionFields">
          <button className="btn btn-success w-100 mt-4" type="submit" value="Login">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};


export default connect(null, { signUp })(SignUp);
