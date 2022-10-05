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
import { Grommet } from 'grommet';

function App() {
  return (
    
    <React.Fragment> 
      
        <Router>
          <Header />
        <Container>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route exact path="/" element={<Control />} />       
          </Routes>
        </Container>
          <Map/>
        </Router>
         
        </React.Fragment>
  );
}

export default App;
