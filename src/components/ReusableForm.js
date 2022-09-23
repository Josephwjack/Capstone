import React from 'react';
import PropTypes from 'prop-types';





function ReusableForm(props){
  return (
    <React.Fragment>
      <h1>This is the Form</h1>
        <form onSubmit={props.formSubmissionHandler}>
        <input 
          type='text'
          name='firstAddress'
          />
        <input 
          type='text'
          name='secondAddress'
          />
        <button type='submit'>Find your halfway</button>
      </form>
    </React.Fragment>
  );
}


ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;

