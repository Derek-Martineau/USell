import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../utilities/decodeJwt';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ReactNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navBar.css';

// Display Navbar
export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      setUser(userInfo);
      console.log(userInfo);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  
  function FurnitureDropdown() { 
  return (
    <NavDropdown title="Furniture" id="nav-dropdown">
      <NavDropdown.Item href="/">Sofas & sectionals</NavDropdown.Item>
      <NavDropdown.Item href="/">Tables & desks</NavDropdown.Item>
      <NavDropdown.Item href="/">Dressers & storage drawers</NavDropdown.Item>
      <NavDropdown.Item href="/">Dining furniture</NavDropdown.Item>
      <NavDropdown.Item href="/">Beds</NavDropdown.Item>
      <NavDropdown.Item href="/">Shelving furniture</NavDropdown.Item>
      <NavDropdown.Item href="/">Armchairs & accent chairs</NavDropdown.Item>
      <NavDropdown.Item href="/">Chairs</NavDropdown.Item>
      <NavDropdown.Item href="/">TV & media furniture</NavDropdown.Item>
      <NavDropdown.Item href="/">Display & storage cabinets</NavDropdown.Item>
      <NavDropdown.Item href="/">Outdoor furniture</NavDropdown.Item>
      <NavDropdown.Item href="/">Sideboards, buffets & sofa tables</NavDropdown.Item>
      <NavDropdown.Item href="/">Armoires & wardrobes</NavDropdown.Item>
      <NavDropdown.Item href="/">Bar furniture</NavDropdown.Item>
      <NavDropdown.Item href="/">Gaming furniture</NavDropdown.Item>
      <NavDropdown.Item href="/">Kids furniture</NavDropdown.Item>
      <NavDropdown.Item href="/">Café furniture</NavDropdown.Item>
      <NavDropdown.Item href="/">Furniture sets</NavDropdown.Item>
      <NavDropdown.Item href="/">Nursery Furniture</NavDropdown.Item>
      <NavDropdown.Item href="/">Utility & storage carts</NavDropdown.Item>
      <NavDropdown.Item href="/">Room dividers</NavDropdown.Item>
    </NavDropdown>
      )};

      const getBarDetails = () => {
        if (user && user.isAdmin) {
          return (
            <div className="bar-details">
              <NavDropdown title={user.username}>
                <NavDropdown.Item href={`/privateUserProfile/${user.username}`}>View Profile</NavDropdown.Item>
                <NavDropdown.Item href={`/editUserProfile`}>Edit Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout} href="/">Logout</NavDropdown.Item>
              </NavDropdown>
            </div>
          );
        } else if (user.username) {
          return (
            <div className="bar-details">
              <NavDropdown title={user.username}>
                <NavDropdown.Item href={`/privateUserProfile/${user.username}`}>View Profile</NavDropdown.Item>
                <NavDropdown.Item href={`/editUserProfile`}>Edit Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout} href="/">Logout</NavDropdown.Item>
              </NavDropdown>
            </div>
          );
        } else {
          return (
            <div className="bar-details">
              <Nav.Link href="/login" style={{ marginRight: '10px' }}>Login</Nav.Link>
              <Nav.Link href="/signup">Register</Nav.Link>
            </div>
          );
        }
      };
    
      return (
        <ReactNavbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">USell</Nav.Link>
              <div className="categories-row">
                <FurnitureDropdown />
              </div>
              {getBarDetails()}
            </Nav>
          </Container>
        </ReactNavbar>
      );
    }