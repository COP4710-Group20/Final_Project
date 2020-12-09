import "./App.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import Moment from "moment";
import PartButtons from "./PartButtons";

function ListOrganizedEvents() {
  const [id, setId] = useState([]);
  // autorun script once land on this page
  Axios.get("http://localhost:3001/viewAllEvents").then((response) => {
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
