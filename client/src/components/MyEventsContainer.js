import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loadEvents from '../redux/actions/eventActions';
import EventsList from './EventsList';
import './EventsContainer.scss';

const MyEventsContainer = (props) => {
  const {
    events, isAuthenticated, followed_events,
  } = props;

  const followedEventsArray = followed_events.map((obj) => obj.event_id);

  const myEvents = isAuthenticated
    ? events.filter(
      event => followedEventsArray.includes(event.id),
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
  followed_events: state.followed_events,
  isAuthenticated: state.auth.isAuthenticated,
  events: state.events,
  dispatch: state.dispatch,
  user: state.auth.currentUser,
});

export default connect(mapStateToProps, null)(MyEventsContainer);
