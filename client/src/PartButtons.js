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

  function RedirectActEvent() {
    history.push('/listactiveevents')
  }

  function ViewActive() {
    history.push('/listactiveevents')
  }

  function ViewPast() {
    history.push('/listorganizedevents')
  }

return (
    <div>
      <h1>Participant</h1>
      <button onClick={DateSearch}>Active Event Date Search</button>
      <button onClick={CitySearch}>Active Event City Search</button>
      
      <h1>Admin</h1>
      <button onClick={RedirectActEvent}>Create Event</button>
      <button onClick={ViewActive}>View Active Events</button>
      <button onClick={ViewPast}>View Past Events</button>
    </div> 

    
);
}

export default PartButtons;