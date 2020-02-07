import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EventsContainer from './components/EventsContainer';
import NotFound from './components/NotFound';
import EventDescription from './components/EventDescription';
import Login from './components/Login';
import './App.scss';
import SignUp from './components/SignUp';
import MyEventsContainer from './components/MyEventsContainer';
import Logout from './components/Logout';


const App = (props) => {
  const { isAuthenticated } = props;

  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   props.logout();
  //   return <Redirect to="/events" push />;
  // };

  return (
    <Router>
      {isAuthenticated
        ? (
          <div className="nav-bar">
            <Link to="/logout" className="m-3 login"> Logout </Link>
            <Link to="/my_events" className="m-3 login">My Events</Link>
            <Link to="/events" className="m-3 login">All Events</Link>
          </div>
        )
        : (
          <div className="nav-bar">
            <Link to="/login" className="m-3 login"> Login </Link>
            <Link to="signUp" className="m-3 login"> Sign Up </Link>
            <Link to="/events" className="m-3 login">All Events</Link>
          </div>
        ) }
      <Switch>
        <Route exact path="/" component={EventsContainer} />
        <Route exact path="/my_events" component={MyEventsContainer} />
        <Route exact path="/events" component={EventsContainer} />
        <Route path="/events/:id" component={EventDescription} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.currentUser,
});

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(App);
