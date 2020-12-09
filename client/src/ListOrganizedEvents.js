import "./App.css";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Moment from "moment";
import PartButtons from "./PartButtons";
import {HomeContext} from './provider/provider';

function ListOrganizedEvents() {
  const global = useContext(HomeContext)
  const state = global.state
  const dispatch = global.dispatch
  const [id, setId] = useState([]);
  // autorun script once land on this page
  Axios.post("http://localhost:3001/viewAllEvents", {
    user_id: state.user.user.user_id, 
  }).then((response) => {
    console.log(response);
    setId(response.data);
  });

  return (
    <div className="userDashboard">
      <PartButtons></PartButtons>
      <h1> List Active Events </h1>
      <div className="header">
        <h3>Title</h3>
        <h3>URL</h3>
      </div>

      {id.map((val, key) => {
        return (
          <div className="list">
            <div>{val.event_title}</div>
            <div>{val.event_URL}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ListOrganizedEvents;
