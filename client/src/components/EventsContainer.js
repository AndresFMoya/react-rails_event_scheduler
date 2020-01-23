import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loadEvents from '../redux/actions/actionCreators';
import EventsList from './EventsList';


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
    <div className="container">
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
});

export default connect(mapStateToProps, null)(EventsContainer);
