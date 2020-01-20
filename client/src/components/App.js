import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState({
    events: '',
  });
  
  const fetchTestEvents = function () {
    fetch('/api/v1/events')
      .then(res => res.json())
      .then(data => setState({ events: data.events }))
      .catch((error) => { console.log("Error while fetching test data", error); })
  };
  
  return (
    <div className="App container">
      <button type="button" onClick={fetchTestEvents} className="btn btn-primary">Fetch Test Events</button>
      <div className="card">
        <p>{state.events}</p>
      </div>
    </div>
  );
};

export default App;