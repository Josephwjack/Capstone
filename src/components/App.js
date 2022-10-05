import React from 'react';
import '../App.css';
import '../map.css';
import Map from './GoogleMap'
import Control from './Control';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <React.Fragment>    
        <Router>
          <Header />
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route exact path="/" element={<Control />} />       
          </Routes>

          <Map/>
        </Router>
        </React.Fragment>
        </Container>
  );
}

export default App;
