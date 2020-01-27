import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const EventsList = (props) => {
  const { events, user, isAuthenticated } = props;
  
  return (
    <div className="listWrapper">
      {events.map((event) => (
        <Event event={event} user={user} key={event.id} id={event.id}/>
      ))}
    </div>
  );
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventsList;
