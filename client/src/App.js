import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import EventsContainer from './components/EventsContainer';
import NotFound from './components/NotFound';
import EventDescription from './components/EventDescription';
import Login from './components/Login';

const App = () => {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: {},
  });

  const handleLogin = (data) => {
    setState({
      isLoggedIn: true,
      user: data.user,
    });
  };

  const handleLogout = () => {
    setState({
      isLoggedIn: false,
      user: {},
    });
  };

  const loginStatus = () => {
    axios.get('localhost:3000/login',
      { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          handleLogin(response);
        } else {
          handleLogout();
        }
      })
      .catch(error => console.log('api errors:', error));
  };

  useEffect(() => {
    loginStatus();
  }, []);

  
  
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={EventsContainer} />
          <Route exact path="/events" component={EventsContainer} />
          <Route path="/events/:id" component={EventDescription} />
          <Route exact path='/login'component={Login}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
