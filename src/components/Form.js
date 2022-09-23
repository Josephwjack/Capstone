import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function Form(props) {
  const [myLocation, setMyLocation] = useState("47.608013, -122.335167")
  const [secondLocation, setSecondLocation] = useState("44.058174, -121.315308");
 

  function handleLocationChange(e) {
    e.preventDefault();
    setMyLocation(e.target.value);
    setSecondLocation(e.target.value);
  }
  return (
    <h1>This is the Form</h1>
    )
  }