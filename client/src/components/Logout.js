import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';

const Logout = (props) => {
  const { logout } = props;

  useEffect(() => {
    logout();
  }, []);

  return (
    <Redirect to="/" />
  );
};

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(Logout);
