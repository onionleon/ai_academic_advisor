import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../index.css'

function Sidebar() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">      
          <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/features">Features</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;