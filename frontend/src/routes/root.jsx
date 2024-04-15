import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from "react-router-dom";
import '../index.css'
import Sidebar from '../components/sidebar';



// function BasicExample() {
//   return (
//     <>
//     <Navbar className='navbar_custom' expand="lg" >
//       <Container>
//         <Navbar.Brand href="/home">AI Advisor</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <NavDropdown title="Contact" id="basic-nav-dropdown">
//               <NavDropdown.Item href="/contact">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     <div id="detail">
//         <Outlet />
//     </div>
//     </>
//   );
// }

// function BasicExample() {
//   return (
//     <>
//       <Navbar className='navbar_custom' expand="lg">
//         <Container>
//           <Navbar.Brand href="/home">AI Advisor</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//           </Nav>
//         </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <div id="detail">
//         <Outlet />
//       </div>
      
      
      
//     </>
//   );
// }

function BasicExample() {
  return (
    <>
      <Navbar className='navbar_custom' expand="lg">
        <Container>
          <Navbar.Brand href="/home">AI Advisor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Insert Navbar links here */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Sidebar Code Starts Here */}
      <div className="d-flex">
        <div className="sidebar" style={{width: '250px', height: '100vh'}}>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link eventKey="link-1">Link 1</Nav.Link>
            <Nav.Link eventKey="link-2">Link 2</Nav.Link>
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
        <div id="detail" style={{flexGrow: 1}}>
          <Outlet />
        </div>
      </div>
      {/* Sidebar Code Ends Here */}
    </>
  );
}

export default BasicExample;