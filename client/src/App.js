import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventsContainer from './components/EventsContainer';
import NotFound from './components/NotFound';
import EventDescription from './components/EventDescription';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={EventsContainer} />
      <Route exact path="/events" component={EventsContainer} />
      <Route path="/events/:id" component={EventDescription} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
