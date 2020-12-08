import "./App.css";
import React, { useState } from "react";
import PartButtons from "./PartButtons";
import DataPicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

function CreateEvent() {

  const [event_title, setEvent_title] = useState("");
  const [event_URL, setEvent_URL] = useState("");
  const [event_start_date, setevent_start_date] = useState(null);
  const [event_end_date, setevent_end_date] = useState(null);
  const [event_address, setevent_address] = useState("");
  const [event_city, setevent_city] = useState("");

  const displayInfo = () => {
    console.log(event_start_date);
  };
 
  // moment(date).format("YYYY-MM-DD")
  return (
    <div className="event-class">
      <PartButtons></PartButtons>
      <div className="events">
        <h1> Create Event </h1>

        <label>Event event_title</label>
        <input type="text" onChange={(event) => {
          setEvent_title(event.target.value);
        }}/>

        <label>Event event_URL</label>
        <input type="text" onChange={(event) => {
          setEvent_URL(event.target.value);
        }}/>

      
        <label>Start Date</label>
        <DataPicker
          selected={event_start_date}
          onChange={(date) => setevent_start_date(date)}
          dateFormat="yyyy/MM/dd "
          minDate={new Date()}
        />

        <label>End Date</label>
        <DataPicker
          selected={event_end_date}
          onChange={(date) => setevent_end_date(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
        />

        <label>event_address</label>
        <input type="text" onChange={(event) => {
          setevent_address(event.target.value);
        }}/>

        <label>event_city</label>
        <input type="text" onChange={(event) => {
          setevent_city(event.target.value);
          }}/>

        <button onClick={displayInfo}>Add Event</button>
      </div>
    </div>
  );
}

export default CreateEvent;
