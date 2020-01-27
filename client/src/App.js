import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import EventsContainer from './components/EventsContainer';
import NotFound from './components/NotFound';
import EventDescription from './components/EventDescription';
import Login from './components/Login';


const App = (props) => {
  
  const {isAuthenticated, user} = props
  
  return (
  <Router>
    <Link to="login">Login</Link>
    <Switch>
      <Route exact path="/" component={EventsContainer}/>
      <Route exact path="/events" component={EventsContainer}/>
      <Route path="/events/:id" component={EventDescription}/>
      <Route path="/login" component = {Login}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
  )
};


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps, {})(App);