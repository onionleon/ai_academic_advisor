import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../index.css'


function Sidebar() {
  const [majors, setMajors] = useState([]);

  useEffect(() => {
    fetchMajors();
  }, []);

  const fetchMajors = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/majors");
      setMajors(response.data.majors);
    } catch (error) {
      setError("Failed to fetch majors.");
      console.error('Error fetching majors:', error);
    }
  }
  
  return (
    <>
    <div className='font_div'>
        <Navbar sticky="top" className='navbar_custom' expand="lg">
          <Container>
            <Navbar.Brand href="/home">
            <img
              alt=""
              src="../assets/react.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
              AI Advisor
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <div className="d-flex">
            <div className="sidebar" style={{ width: '700px', height: '100vh', fontSize: "1.5em", color: "white" }}>  {/* Added color white here */}
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home" className="text-white">Home</Nav.Link> {/* text-white class for Bootstrap */}
                <Nav.Link eventKey="link-1" className="text-white">Link 1</Nav.Link> {/* text-white class for Bootstrap */}
                <Nav.Link eventKey="link-2" className="text-white">Link 2</Nav.Link> {/* text-white class for Bootstrap */}
                <NavDropdown title="Dropdown" id="nav-dropdown" className="custom-dropdown">
                {majors.map((major) => (
                  <NavDropdown.Item key={major.id} eventKey={`4.${major.id}`} className="text-white">
                    {major.major}
                  </NavDropdown.Item>
                ))}
                </NavDropdown>
              </Nav>
            </div>
            <div id="detail" style={{ flexGrow: 1 }}>
              <Outlet />
            </div>
          </div>
        </div>
    </>
  );
}

export default Sidebar;