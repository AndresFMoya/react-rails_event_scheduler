import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Event = (props) => {
  const { event } = props;

  return (
    <div className="card" key={event.id} id={event.id}>
      <div className="event-info p-5">
        <div className="event">{ event.title }</div>
        <div className="event">{ event.city }</div>
        <div className="event">{ event.location }</div>
        <button type="button" className="btn btn-primary">Add to My Events</button>
        <Link to={`events/${event.id}`}>Description</Link>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Event;
