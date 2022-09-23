import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';




function ReusableForm(props){
  return (
    <React.Fragment>
      <h1>This is the Form</h1>
        <form onSubmit={(e)=> props.onFormSubmission(e)}>
        <input onChange={handleFirstLocation}
          type='text'
          name='firstAddress'
          />
        <input onChange={handleSecondLocation}
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

