import React, { useState } from 'react';
import { LocationPin, Map } from './GoogleMap';

const Result = ({resultList}) => {
  const[choice, setChoice] = useState(resultList[Math.floor(Math.random() * resultList.length)]);
  const place = () => {
    setChoice(resultList[Math.floor(Math.random() * resultList.length)])
  };
  
  
  

  return (
    <React.Fragment>
      <h5>Wanna meet here?</h5>
      <h1>{choice.name}</h1>
      <h5>{choice.rating}</h5>
      <h5>Location: {choice.vicinity}</h5>

      <button onClick={()=>place()}>Pick a new spot</button>
      
      
      
      {/* <LocationPin lat={final.lat} lng={final.lng}/> */}
     
      
      {/* <button onClick={setFinal(null)}> new search</button> */}
      </React.Fragment>
  )
}

export default Result;

