import "./App.css";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Moment from "moment";
import PartButtons from "./PartButtons";
import {HomeContext} from './provider/provider';

function ListActiveEvents() {
  const [activeEventList, setactiveEventList] = useState([]);

  const global = useContext(HomeContext)
  const state = global.state
  const dispatch = global.dispatch
  // autorun script once page is visit
  Axios.post("http://localhost:3001/viewActiveEvents", {
    user_id: state.user.user.user_id,
  }).then((response) => {
    setactiveEventList(response.data);
    console.log(response.data);
  });

  return (
    <div className="userDashboard">
      <PartButtons></PartButtons>

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

      {activeEventList.map((val, key) => {
        return (
          <div className="list">
            <div>{val.event_title}</div>
            <div>{val.event_description}</div>
            <div>{val.event_URL}</div>
            <div>{Moment(val.event_start_date).format("MM-DD-YY")}</div>
            <div>{Moment(val.event_start_date).format("MM-DD-YY")}</div>
            <div>{val.event_address}</div>
            <div>{val.event_city}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ListActiveEvents;
