import "./App.css";
import React, { useState } from "react";
import PartButtons from "./PartButtons";
import DataPicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateEvent() {

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const displayInfo = () => {
    console.log(title + url + startDate + endDate + address + city);
  };

  return (
    <div className="event-class">
      <PartButtons></PartButtons>
      <div className="events">
        <h1> Create Event </h1>

        <label>Event Title</label>
        <input type="text" onChange={(event) => {
          setTitle(event.target.value);
        }}/>

        <label>Event URL</label>
        <input type="text" onChange={(event) => {
          setUrl(event.target.value);
        }}/>

      
        <label>Start Date</label>
        <DataPicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/dd/yy"
          minDate={new Date()}
        />

        <label>End Date</label>
        <DataPicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="MM/dd/yy"
          minDate={new Date()}
        />

        <label>Address</label>
        <input type="text" onChange={(event) => {
          setAddress(event.target.value);
        }}/>

        <label>City</label>
        <input type="text" onChange={(event) => {
          setCity(event.target.value);
          }}/>

        <button onClick={displayInfo}>Add Event</button>
      </div>
    </div>
  );
}

export default CreateEvent;
