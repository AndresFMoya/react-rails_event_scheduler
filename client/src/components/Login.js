import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authenticate } from '../redux/actions/authActions';
import './Login.scss';

const Login = (props) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setState({
        username: value,
        password: state.password,
      });
    }
    if (name === 'password') {
      setState({
        username: state.username,
        password: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.authenticate(state)) {
      props.history.push('/');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="page-title title">Login</h1>
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
          id="formControlsPassword"
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <div className="submissionFields">
          <button className="btn btn-success w-100 mt-4" type="submit" value="Login">Log In</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};


export default connect(null, { authenticate })(Login);
