import React from 'react';
import PropTypes from 'prop-types';

const Event = (props) => {
  const { event } = props;

  return (
    <div className="card" key={event.id} id={event.id}>
      <div className="event-info p-5">
        <div className="event">{ event.title }</div>
        <div className="event">{ event.description }</div>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Event;
