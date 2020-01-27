import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="card" key={event.id} id={event.id}>
      <button type="button" onClick={goBack}>Go Back</button>
      <div className="event-info p-5">
        <div className="event">{ event.title }</div>
        <div className="event">{ event.description }</div>
        <div className="event">{ event.city }</div>
        <div className="event">{ event.country }</div>
        <div className="event">{ event.location }</div>
        <div className="event">{ event.status }</div>
      </div>
    </div>
  );
};

export default EventDescription;
