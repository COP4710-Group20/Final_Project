import "./App.css";
import React, { useState, useContext } from "react";
import PartButtons from "./PartButtons";
import Axios from "axios";
import Moment from 'moment';
import {HomeContext} from './provider/provider';

function ListEventsByCity() {

  // {state.user.user.display_name}

  // global 
  const global = useContext(HomeContext)
  const state = global.state
  const dispatch = global.dispatch

  const [city, setCity] = useState([]);
  const [cityEvent, setCityEvent] = useState([]);

  
  const searchCity = () => {
    console.log(city);
    Axios.post("http://localhost:3001/viewByCity", {
      event_city: city, 
    }).then((response) => {
      setCityEvent(response.data);
      console.log(response.data);
    }) 
  };
  // state.user.user.user_id
  function signUp(id) {
    console.log(id);
    Axios.post("http://localhost:3001/signUp", {
      event_id: id, 
      user_id: 1,
    }).then((response) => {
      setCityEvent(response.data);
      console.log(response.data);
    }) 
  }

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
 

      <div className="city-header">
        <h3>Title</h3>
        <h3>URL</h3>
      </div>
      {
        cityEvent.map((val, key) => {
          return <div className="list">
            <button onClick={signUp(val.event_id)}>sign up</button>
            <div>{val.event_title}</div>
            <div>{val.event_URL}</div>
          </div>
        })
      }
    
    </div>
  );
}

export default ListEventsByCity;
