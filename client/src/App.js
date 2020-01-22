import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loadEvents } from '../redux/actions/actionCreators';


class App extends Component {
  
  const {events} = props
  
  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents() {
    axios.get('/api/v1/events')
      .then(response => {
        this.props.dispatch(loadEvents(response.data));
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <EventsList todos={props.events} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps, null)(App);
