import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/add"> AddProduct</Link>'&nbsp;'
            <Link to="/update"> UpdateProduct</Link>'&nbsp;'
            <Link to="/login"> Login</Link>'&nbsp;'
            <Link to="/register"> Register</Link>'&nbsp;'
          </Nav>
        
      </Navbar>
    </div>
  );
}

export default Header;
