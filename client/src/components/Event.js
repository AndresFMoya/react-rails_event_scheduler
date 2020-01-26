import React from 'react';
import PropTypes from 'prop-types';

const Event = (props) => {
  const { event } = props;

  return (
    <div className="card" key={event.id} id={event.id}>
      <div className="event-info p-5">
        <div className="event">{ event.title }</div>
        <div className="event">{ event.city }</div>
        <div className="event">{ event.location }</div>
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
  }),
};

Event.defaultProps = {
  event: PropTypes.shape({
    isFollowed: false,
  }),
};

export default Event;
