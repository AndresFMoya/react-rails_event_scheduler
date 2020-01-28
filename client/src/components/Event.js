import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEventFollower, deleteEventFollower } from '../redux/actions/followActions';


const Event = (props) => {
  const {
    event, user, isAuthenticated,
  } = props;

  const [state, setState] = useState({
    isFollowed: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.createEventFollower(event.id)) {
      setState({
        isFollowed: true,
      });
    }
  };

  const handleRemove = () => {
    if (props.deleteEventFollower(event.id)) {
      setState({
        isFollowed: false,
      });
    }
  };

  return (
    <div className="card" key={event.id} id={event.id}>
      <div className="event-info p-5">
        <div className="event">{ event.title }</div>
        <div className="event">{ event.city }</div>
        <div className="event">{ event.location }</div>
        { (isAuthenticated && user.event_follower_ids.includes(event.id))
        || (state.isFollowed === true) ? <button onClick={handleRemove} type="button">Unfollow</button>
          : <button type="button" onClick={handleSubmit}>Follow</button> }
        <Link to={`events/${event.id}`}>Description</Link>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.oneOfType([PropTypes.object]).isRequired,
  user: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  createEventFollower: PropTypes.func.isRequired,
  deleteEventFollower: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.currentUser,
});

export default connect(mapStateToProps, { createEventFollower, deleteEventFollower })(Event);
