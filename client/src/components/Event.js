import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEventFollower, deleteEventFollower } from '../redux/actions/followActions';
import './Event.scss';


const Event = (props) => {
  const {
    event, user, isAuthenticated,
  } = props;

  const history = useHistory();

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

  const handleEventDescription = () => {
    history.push(`events/${event.id}`);
  };

  return (
    <li className="event">
      <p className="date-start">{event.date_start}</p>
      <div className="d-flex row">
        <div className="card event-info" onClick={handleEventDescription} key={event.id} id={event.id}>
          <div className="event-title">{ event.title }</div>
          <div className="event-city pb-2">{ event.city }</div>
        </div>
        { (isAuthenticated && user.event_follower_ids.includes(event.id))
        || (state.isFollowed === true) ? <div className="event-button-remove" onClick={handleRemove}>+ Your Schedule</div>
          : <div className="event-button-add" onClick={handleSubmit}>+ Your Schedule</div> }
      </div>
    </li>
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
