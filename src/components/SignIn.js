import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignIn(){
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`)
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      })
  }

  return (
    <React.Fragment>
      <Form  onSubmit={doSignIn}>
      <h1>Sign In</h1>
      {signInSuccess}
      <Form.Group className="mb-3" controlId="signinEmail">
        <Form.Control
          type='signinEmail'
          name='signinEmail'
          placeholder='email' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="signinPassword">
        <Form.Control
          type='password'
          name='signinPassword'
          placeholder='password' />
      </Form.Group>
        <Button type='submit'>Sign in</Button>
        </Form>
     
      <div>
      <h1>Sign Out</h1>
      {signOutSuccess}
      <br />
      </div>
      <Button onClick={doSignOut}>Sign out</Button>
    </React.Fragment>
      
  );
}

export default SignIn;