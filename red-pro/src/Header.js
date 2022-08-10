import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Header() {
  const navigate=useNavigate();
  const user=JSON.parse(localStorage.getItem('user-info'));
  
  function LogoutUser(){
     localStorage.clear();
     navigate("/register")
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">

        <Navbar.Brand href="/"> Navbar</Navbar.Brand>
        <Nav className="me-auto">
          {
            localStorage.getItem("user-info") ?
              <>
                <Link to="/"> Product List</Link>&nbsp;&nbsp;
                <Link to="/add"> AddProduct</Link>&nbsp;&nbsp;
                <Link to="/update"> UpdateProduct</Link>&nbsp;&nbsp;
              </>
              :
              <>
                 <Link to="/login"> Login</Link>&nbsp;&nbsp;
                <Link to="/register"> Register</Link>&nbsp;&nbsp;
              </>
          }
        </Nav>
{
  localStorage.getItem("user-info") ?
  <Nav >
  <NavDropdown  title={user && user.name}>
<NavDropdown.Item onClick={LogoutUser}>Logout</NavDropdown.Item>
<NavDropdown.Item>Profile</NavDropdown.Item>
  </NavDropdown>
</Nav>
:null
}

      </Navbar>
    </div>
  );
}

export default Header;
