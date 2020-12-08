import './App.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import Moment from 'moment';
// const getList = () => {
//   Axios.get("http://localhost:3001/listactiveevents").then((reponse) => {
//      console.log(reponse);
//      setactiveEventList{response.data};
//     });
// };

function ListActiveEvents() {
  const [activeEventList, setactiveEventList] = useState([]);

  //getList();
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
    Axios.get("http://localhost:3001/listactiveevents").then((response) => {
      console.log(response);
      setactiveEventList(response.data);
    });
  }

  function ViewPast() {
    history.push('/listorganizedevents')
  }

  
  return (
    <div>
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
          <button onClick={ViewPast}>View Past Events</button>
        </div>
      </div>

      <h1> List Active Events </h1>
      <div className="header">
        <h3>Title</h3>
        <h3>Description</h3>
        <h3>URL</h3>
        <h3>Start Date</h3>
        <h3>End Date</h3>
        <h3>Address</h3>
        <h3>City</h3>
      </div>
      

    {
      activeEventList.map((val, key) => {
        return <div className="list">
          <div>{val.event_title}</div>
          <div>{val.event_description}</div>
          <div>{val.event_URL}</div>
          <div>{Moment(val.event_start_date).format("MM-DD-YY")}</div>
          <div>{Moment(val.event_start_date).format("MM-DD-YY")}</div>
          <div>{val.event_address}</div>
          <div>{val.event_city}</div>
        </div>
      })
    }

    </div>
  );
}

export default ListActiveEvents;