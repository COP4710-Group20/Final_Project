import "./App.css";
import React, { useState } from "react";
import PartButtons from "./PartButtons";
import Axios from "axios";
import Moment from 'moment';

function ListEventsByCity() {
  const [city, setCity] = useState("");

  const searchCity = () => {
    console.log(city);
   //Axios.post("http://localhost:3001/viewByCity").then((response) => {
    //  console.log(response);
     // setCity(response.data);
   // });
  };

  return (
    <div>
      <PartButtons></PartButtons>
      <h1> List Events In a city... </h1>
      <input
        type="text"
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />

      <button onClick={searchCity}>Search City</button>
{/* 
      {
        city.map((val, key) => {
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
    */}
    </div>
  );
}

export default ListEventsByCity;
