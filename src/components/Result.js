import React, { useState } from 'react';
import { Map } from './GoogleMap';

const Result = ({resultLocation}) => {
  const[final, setFinal] = useState(resultLocation)
  setFinal(resultLocation)
  

  return (
    <div>
      <h5>{final.name}</h5>
      
    </div>
    
  )
}

export default Result;

