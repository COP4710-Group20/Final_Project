import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import PartButtons from './PartButtons'

function CreateEvent() {
  return (
    <div>
     <PartButtons></PartButtons>
     <h1> Create Event </h1>   
    </div>
  );
}

export default CreateEvent;