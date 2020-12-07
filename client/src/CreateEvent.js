import "./App.css";
import React, { useState } from "react";
import PartButtons from "./PartButtons";
import DataPicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
import Moment from 'moment';

function CreateEvent() {

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const displayInfo = () => {
    console.log(Moment(startDate).format("YYYY-MM-DD"));
  };

  const createEvent = () => {
    console.log("Create Event");
    Axios.post("http://localhost:3001/createEvent", {
      user_id: 1,
      event_title: title,
      event_description: description,
      event_url: url,
      event_start_date: Moment(startDate).format("YYYY-MM-DD"),
      event_end_date: Moment(endDate).format("YYYY-MM-DD"),
      event_city: city,
      event_address: address,

    })};
  //   .then((response) => {
  //     console.log(response.data);

  //     if(response.data.message) {
  //       setLoginStatus(response.data.message);
  //     } else {
  //       if (response.data[0].is_super == 1) {
  //         history.push('/superadmin');
  //       } else {
  //         history.push('/user');
  //       }
  //       setLoginStatus(response.data[0].display_name + response.data[0].is_super);
  //     }
  //   }) 
  // };

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

        <label>Event Description</label>
        <textarea id="event_description" name="event_description" rows="4" cols="50" onChange={(event) => {
          setDescription(event.target.value);
        }}/>

      
        <label>Start Date</label>
        <DataPicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
        />

        <label>End Date</label>
        <DataPicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
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

        <button onClick={createEvent}>Add Event</button>
      </div>
    </div>
  );
}

export default CreateEvent;
