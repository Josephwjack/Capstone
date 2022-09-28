import React, { useState } from 'react';
import { PropTypes } from 'prop-types';



function Form(props) {
  const [location1, setLocation1] = useState(null);
  const [location2, setLocation2] = useState("");
  
  function handleFirstLocation(event){
    event.preventDefault();
      setLocation1("seattle, wa"); 
  }

  function handleSecondLocation(event){
    event.preventDefault();
      setLocation2(event.target.value);
  }
 
  return (
    
    <React.Fragment>
      <h1>This is the Form</h1>
        <form onSubmit={(event)=>props.onFormSubmission(event, location1, location2)}>
        <input onChange={handleFirstLocation}
          type='text'
          name='firstLocation'
          />
        <input onChange={handleSecondLocation}
          type='text'
          name='secondLocation'
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