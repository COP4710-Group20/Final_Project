import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';

function PartButtons() {
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
  }

  function ViewPast() {
    history.push('/listorganizedevents')
  }

return (
    <div className="flex-container">
      <div>
      <h2>Participant</h2>
        <button onClick={DateSearch}>Active Event Date Search</button>
        <button onClick={CitySearch}>Active Event City Search</button>
      </div>
      
      <div>
      <h2>Admin</h2>
        <div className="adminButtons">
        <button onClick={CreateEvent}>Create Event</button>
        <button onClick={ViewActive}>View Active Events</button>
        <button onClick={ViewPast}>View Past Events</button>
        </div>
      </div>
    </div> 

);
}

export default PartButtons;