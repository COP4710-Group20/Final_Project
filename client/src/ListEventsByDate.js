import './App.css';
import React, { useState } from 'react';
import PartButtons from './PartButtons'
import DataPicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function ListEventsByDate() {

  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div>
      <PartButtons></PartButtons>
     <h1> List Events By Date Here.. </h1>   
      <DataPicker selected={selectedDate} 
      onChange={date => setSelectedDate(date)} 
      dateFormat='dd/MM/yy'
      minDate={new Date()}
        />
    </div>
  );
}

export default ListEventsByDate;