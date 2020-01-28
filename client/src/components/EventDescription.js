import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './EventDescription.scss';

const EventDescription = (props) => {
  const initialEventState = {
    event: {},
    loading: true,
  };

  const [event, setEvent] = useState(initialEventState);

  useEffect(() => {
    const getEvent = async () => {
      const { data } = await axios(`/api/v1/events/${props.match.params.id}`);
      setEvent(data);
    };
    getEvent();
  }, []);

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div className="card event-description" key={event.id} id={event.id}>
      <div className="top-event-description">
        <div className="d-flex">
          <i className="fas fa-arrow-left back-icon" onClick={goBack} />
          <div className="event-description-title">{ event.title }</div>
        </div>
        <div className="card top-middle-event-description bg-white m-3 mt-4 p-4 ">
          <div className="event-description-date-card border-bottom d-flex flex-row pb-3">
            <span><i className="far fa-calendar-alt icon"/></span>
            <div className="ml-3">
              <div className="date-label">Date & Time</div>
              <div className="date w-100">{ event.date_start }</div>
            </div>
          </div>
          <div className="event-description-date-card d-flex flex-row pt-3">
            <span><i className="fas fa-university icon"/></span>
            <div className="w-100 ml-3">
              <div className="date-label">City</div>
              <div className="city w-100">{ event.city }</div>
            </div>
          </div>
        </div>
        <div className="card m-3 justify-content-between align-items-center d-flex flex-row add-to-schedule">
          <span className="m-2 add-label">Add to your Schedule </span>
          <i className="fas fa-plus m-2 icon" />
        </div>

      </div>

      <div className="card p-3 info">
        <span className="infoLabel">Description </span>
        <div className="description">{ event.description }</div>
      </div>
  
      <div className="card p-3 location">
        <span className="infoLabel">Location </span>
        <div className="description">{ event.location }</div>
      </div>
  
      <div className="card p-3 status">
        <span className="infoLabel">Status </span>
        <div className="description">{ event.status }</div>
      </div>
    </div>
  );
};

EventDescription.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default EventDescription;
