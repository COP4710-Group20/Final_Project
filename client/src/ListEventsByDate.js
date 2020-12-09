import "./App.css";
import PartButtons from "./PartButtons";
import DataPicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import React, { useState, useContext } from "react";
import Axios from "axios";
import Moment from "moment";
import { HomeContext } from "./provider/provider";

function ListEventsByDate() {

    // global 
    const global = useContext(HomeContext)
    const state = global.state
    const dispatch = global.dispatch
    
  const [fromDate, setFromDate] = useState(null);
  const [toDate, settoDate] = useState(null);

  const [list, setList] = useState([]);

  const searchDate = () => {
    console.log(Moment(fromDate).format("YYYY-MM-DD"));
    console.log(Moment(toDate).format("YYYY-MM-DD"));

    Axios.post("http://localhost:3001/viewByStartEnd", {
      event_start_date: fromDate,
      event_end_date: toDate,
    }).then((response) => {
      setList(response.data);
      console.log(response.data);
    });
  };

  function signUp(id) {
    console.log(id);
    Axios.post("http://localhost:3001/signUp", {
      event_id: id, 
      user_id: state.user.user.user_id,
    }).then((response) => {
      //setCityEvent(response.data);
      console.log(response.data);
    }) 
  }
  return (
    <div className="userDashboard">
      <PartButtons></PartButtons>
      <h1> List Events By Date Here.. </h1>

      <div className="date-text-box">
        <h3>FROM</h3>
        <DataPicker
          selected={fromDate}
          onChange={(date) => setFromDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
        />

        <h3>TO</h3>
        <DataPicker
          selected={toDate}
          onChange={(date) => settoDate(date)}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
        />
      </div>

      <button onClick={searchDate}>Search Events</button>
      <div>
        {list.map((val, key) => {
          return (
            <div className="list">
              <button onClick = { () => signUp(val.event_id)}>sign up</button>
              <div>{val.event_title}</div>
              <div>{val.event_URL}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListEventsByDate;
