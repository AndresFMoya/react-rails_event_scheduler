import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEventFollower, deleteEventFollower } from '../redux/actions/followActions';
import './Event.scss';


const Event = (props) => {
  const {
    event, user, isAuthenticated, followed_events,
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

  const checkFollowed = () => {
    if ((props.followed_events.filter(el => el.event_id === props.event.id)).length > 0) {
      return (
        <button type="button" className="event-button-remove" onClick={handleRemove}><span className="button-add w-100">+ Your Schedule </span>
        </button>
      )
    } else {
      return (
        <button type="button" className="event-button-add" onClick={handleSubmit}><span className="button-add w-100">+ Your Schedule</span>
        </button>
      )
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();
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
      <p className="date-start">{ event.date_start && `${event.date_start.slice(0, 10)} ${event.date_start.slice(11, 16)}` }</p>
      <div className="d-flex row">
        <div role="presentation" className="card event-info" onClick={handleEventDescription} onKeyPress={handleEventDescription} key={event.id} id={event.id}>
          <div className="event-title">{ event.title }</div>
          <div className="event-city pb-2">{ event.city }</div>
        </div>
        { isAuthenticated ? checkFollowed() : <div />}
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
  followed_events: state.followed_events,
});

export default connect(mapStateToProps, { createEventFollower, deleteEventFollower })(Event);
