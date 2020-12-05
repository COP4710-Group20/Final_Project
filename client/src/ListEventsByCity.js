import './App.css';
import React from 'react';
import PartButtons from './PartButtons'
import SearchBox from './SearchBox';

function ListEventsByCity() {
  return (
    <div>
      <PartButtons></PartButtons>
     <h1> List Events In a city... </h1>
     <SearchBox placeholder="Enter city name" handleChange={(e) => console.log(e.target.value)}/>
    </div>
  );
}

export default ListEventsByCity;