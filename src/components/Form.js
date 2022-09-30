import React, { useState } from 'react';
import { PropTypes } from 'prop-types';



function Form(props) {
  const [location1, setLocation1] = useState("seattle, wa");
  const [location2, setLocation2] = useState("new york");
  
  
  
  
  
  
  return (
    
    <React.Fragment>
      <h1>This is the Form</h1>
        <form onSubmit={(e)=>props.onFormSubmission(e, location1, location2)}>
        <input
          type='text'
          name='firstLocation'
          onChange={(e) => setLocation1(e.target.value)}
          />
        <input
          type='text'
          name='secondLocation'
          onChange={(e) => setLocation2(e.target.value)}
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