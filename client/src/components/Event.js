import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Event = (props) => {
  const { event, user, isAuthenticated } = props;


  return (
    <div className="card" key={event.id} id={event.id}>
      <div className="event-info p-5">
        <div className="event">{ event.title }</div>
        <div className="event">{ event.city }</div>
        <div className="event">{ event.location }</div>
        { isAuthenticated && user.event_follower_ids.includes(event.id) ? <button type="button">Unfollow</button>
          : <button type="button">Follow</button> }
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.currentUser,
});

export default connect(mapStateToProps, {})(Event);
