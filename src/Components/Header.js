import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap/";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../Redux/authSlice";
import logoImage from './logo.PNG';
import Filter from "../Components/Filter";

const Header = (mycars) => {
  console.log('mycars:', mycars);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const linkStyle = {
    textDecoration: "none",
    marginRight: "5px",
    color: "white",
  };

  const { userInfo } = useSelector((state) => state.auth);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(Logout());
    navigate("/login");
  };
  const [search, setSearch] = useState("");



  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logoImage}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Auto_tn Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={linkStyle}>Home</Nav.Link>
            <Nav.Link href="/News" style={linkStyle}>Services</Nav.Link>
            <Nav.Link href="/Contact" style={linkStyle}>Contact</Nav.Link>
          </Nav>
          <Filter setSearch={setSearch} />
    
    
         
          
          <Nav>
            {userInfo ? (
              <NavDropdown
                title={
                  <div>
                    <h6>{userInfo.name}</h6>
                    <img
                      src={userInfo.profileImage}
                      style={{ width: "40px", height: "40px" }}
                      alt="pt"
                    />
                  </div>
                }
              >
                <NavDropdown.Item href="/dashboard">Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown className="dropdown-menu-right">
                <Link to={"/login"} className="dropdown-item" style={linkStyle}>Sign in</Link>
                <Link to={"/register"} className="dropdown-item" style={linkStyle}>Sign up</Link>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


