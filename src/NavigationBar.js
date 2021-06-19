import React, { Component } from 'react';
import './NavigationBar.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

class NavigationBar extends Component {
    state = {  }
    render() { 
        return (             
            <Navbar  expand="lg" className="navbar">           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Navbar.Brand href="https://www.codingninjas.com/" className="nav-item">Coding Ninjas</Navbar.Brand>
                <Nav.Link href="#home" className="nav-item">Home</Nav.Link>
                <NavDropdown title="Courses"id="basic-nav-dropdown" className="nav-item"  >
                  <NavDropdown.Item href="#action/3.1">Foundation</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Data & Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Career Track</NavDropdown.Item>
                </NavDropdown>  
                <Nav.Link href="#practice" className="nav-item">Practice</Nav.Link>  
                <Nav.Link href="#events" className="nav-item">Events</Nav.Link> 
                <Nav.Link href="#campus-ninjas" className="nav-item">Campus Ninjas</Nav.Link>  
                <Nav.Link href="#blog" className="nav-item">Blog</Nav.Link>    
                <Nav.Link href="#my-classroom" className="nav-item">My Clasroom</Nav.Link>    
              </Nav>
            </Navbar.Collapse>
          </Navbar>      
         );
    }
}
 
export default NavigationBar;

