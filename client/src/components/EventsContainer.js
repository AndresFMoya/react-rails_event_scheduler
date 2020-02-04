import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loadEvents from '../redux/actions/eventActions';
import EventsList from './EventsList';
import './EventsContainer.scss';

const EventsContainer = (props) => {
  const { events, dispatch } = props;

  const fetchEvents = () => {
    axios.get('/api/v1/events')
      .then(response => {
        dispatch(loadEvents(response.data));
      })
      .catch(error => (error));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="container agenda">
      <div className="card title">Agenda</div>
      <EventsList events={events} />
    </div>
  );
};

EventsContainer.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.events,
  dispatch: state.dispatch,
  user: state.auth.currentUser,
});

export default connect(mapStateToProps, null)(EventsContainer);
