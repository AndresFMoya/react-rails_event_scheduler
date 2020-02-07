import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const EventsList = (props) => {
  const { events } = props;

  return (
    <ul className="timeline">
      {events.map((event) => (
        <Event event={event} key={event.id} id={event.id} />
      ))}
    </ul>
  );
};

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventsList;
