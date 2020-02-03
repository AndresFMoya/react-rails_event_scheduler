import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loadEvents from '../redux/actions/eventActions';
import EventsList from './EventsList';
import './EventsContainer.scss';

const MyEventsContainer = (props) => {
  const {
    events, dispatch, user, isAuthenticated,
  } = props;

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

  const myEvents = isAuthenticated
    ? events.filter(
      event => user.event_follower_ids.includes(event.id),
    ) : [];

  return (
    <div className="container agenda">
      <div className="card title">My Events</div>
      <EventsList events={myEvents} />
    </div>
  );
};

MyEventsContainer.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  events: state.events,
  dispatch: state.dispatch,
  user: state.auth.currentUser,
});

export default connect(mapStateToProps, null)(MyEventsContainer);
