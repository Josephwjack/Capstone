import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { GrDownload } from 'react-icons/gr';


function Header(){
  
  function gitHub(){
    window.location='https://github.com/Josephwjack/between-us';
  }
  
  return (
    <React.Fragment>
    <Navbar bg="dark" variant="dark" width="100">
        <Container>
          <Navbar.Brand>Between Us</Navbar.Brand>
          <Nav className="m-3 p-10">                
            <Nav.Link href="/">Home</Nav.Link>                        
            <Nav.Link href="/sign-in">Login</Nav.Link>
            <Nav.Link href="/sign-up">Register</Nav.Link>
            <Link onClick={()=>gitHub()}>
              
                <GrDownload />
                </Link>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;