import React, { useState } from 'react';
import { PropTypes } from 'prop-types';



function Form(props) {
  const [firstLocation, setFirstLocation] = useState("seattle");
  const [secondLocation, setSecondLocation] = useState("tempe, arizona");
  
  
  
  
  
  
  return (
    
    <React.Fragment>
      <h1>This is the Form</h1>
        <form onSubmit={(e)=>props.onFormSubmission(e, firstLocation, secondLocation)}>
        <input
          type='text'
          name='firstLocation'
          onChange={(e) => setFirstLocation(e.target.value)}
          />
        <input
          type='text'
          name='secondLocation'
          onChange={(e) => setSecondLocation(e.target.value)}
          />
        <button type='submit'>Find your halfway</button>
      </form>
    </React.Fragment>
  );
}
    

 
Form.propTypes = {
  onFormSubmission: PropTypes.func,
};

export default Form;