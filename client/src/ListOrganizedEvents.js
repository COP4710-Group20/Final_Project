import './App.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import Moment from 'moment';

function ListOrganizedEvents() {
  const [id, setId] = useState([]);

  let history = useHistory();

  function DateSearch() {
    history.push('/listeventsbydate')
  }

  function CitySearch() {
    history.push('/listeventsbycity')
  }

  function CreateEvent() {
    history.push('/createevent')
  }

  function ViewActive() {
    history.push('/listactiveevents')
  };

  function ViewPast() {
    history.push('/listorganizedevents')
    Axios.get("http://localhost:3001/viewAllEvents").then((response) => {
      console.log(response);
      setId(response.data);
    });
  }

  return (
    <div className="userDashboard">
      <div className="flex-container">
        <div>
          <h2>Participant</h2>
          <button onClick={DateSearch}>Active Event Date Search</button>
          <button onClick={CitySearch}>Active Event City Search</button>
        </div>

        <div>
          <h2>Admin</h2>
          <button onClick={CreateEvent}>Create Event</button>
          <button onClick={ViewActive}>View Active Events</button>
          <button onClick={ViewPast}>View All Events</button>
        </div>
      </div>

      <h1> List Active Events </h1>
      <div className="header">
        <h3>Title</h3>
        <h3>URL</h3>
      </div>
      

    {
      id.map((val, key) => {
        return <div className="list">
          <div>{val.event_title}</div>
          <div>{val.event_URL}</div>
        </div>
      })
    }

    </div>
  );
}

export default ListOrganizedEvents;