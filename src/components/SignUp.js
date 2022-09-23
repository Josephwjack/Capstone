import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Form from 'react-bootstrap/Form';

function SignUp(){
  const [signUpSuccess, setSignUpSuccess] = useState(null);

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`) 
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}!`)
      });
  }

  return (
    <React.Fragment>
      <div>
      <Form onSubmit={doSignUp}>
      <h1>Sign up</h1>
      {signUpSuccess}
      <Form.Group className="mb-3 justify-content-center" controlId="email">
      {/* <form onSubmit={doSignUp}> */}
        {/* <input */}
          <Form.Control type='email'
          name='email'
          placeholder='email' />
      </Form.Group>
      <Form.Group className="mb-3 justify-content-center" controlId="password">
          <Form.Control type='password'
          name='password'
          placeholder='password' />
          </Form.Group>
        <Button type='submit'>Sign up</Button>
      </Form>
      </div>
      </React.Fragment>
  );
}

export default SignUp;
