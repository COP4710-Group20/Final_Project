import './App.css';
import React, { useState } from 'react';
import PartButtons from './PartButtons'
import SearchBox from './SearchBox';

function ListEventsByCity() {
  const [city, setCity] = useState("");


  const displayInfo = () => {
    console.log(city);
  };
 
  return (
    <div>
      <PartButtons></PartButtons>
     <h1> List Events In a city... </h1>
     <input type="text" onChange={(event) => {
          setCity(event.target.value);
        }}/>

<button onClick={displayInfo}>Search City</button>

    </div>
  );
}

export default ListEventsByCity;