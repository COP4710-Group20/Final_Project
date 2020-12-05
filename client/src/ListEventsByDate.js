import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import PartButtons from './PartButtons'

function ListEventsByDate() {
  return (
    <div>
      <PartButtons></PartButtons>
     <h1> List Events By Date Here.. </h1>   
    </div>
  );
}

export default ListEventsByDate;