import React, { useState } from 'react';
import { LocationPin, Map } from './GoogleMap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { Input } from 'reactstrap';
import styled from 'styled-components';

const Result = ({resultList}) => {
  const[choice, setChoice] = useState(resultList[Math.floor(Math.random() * resultList.length)]);
  const place = () => {
    setChoice(resultList[Math.floor(Math.random() * resultList.length)])
  };
  
  
  

  return (
    <React.Fragment>
      <Card className="cardStyle" >
      <Card.Title><h5>How about?</h5></Card.Title>
      <Card.Body><h1>{choice.name}</h1>
      <h5>Rating: {choice.rating}/5</h5>
      <h5>Location: {choice.vicinity}</h5>
      </Card.Body>
      <Button onClick={()=>place()}>Pick a new spot</Button>
      
      </Card>
      
      {/* <LocationPin lat={final.lat} lng={final.lng}/> */}
     
      
      {/* <button onClick={setFinal(null)}> new search</button> */}
      </React.Fragment>
  )
}

export default Result;

