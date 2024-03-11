import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import '../Styles_Home/NavBar_Home.css'
import logo from '../Asets/spotifyLogo.jpg'
import { Link } from 'react-router-dom'
function NavBar_Home() {
  return (
    <div>
      
        
     
         <Navbar expand="lg" className="navbg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <div className='dropdownHover'>
    <Nav.Link className='navElements' href="#home">Premium</Nav.Link>
    <div className="dropdownContent">
      <a href="#"><p className='premium'>Premium Individual</p><p className='subpremium'>For one person</p></a>
      <a href="#"><p className='premium'>Premium Duo</p><p className='subpremium'>For couple under one roof.</p></a>
      <a href="#"><p className='premium'>Premium Family</p><p className='subpremium'>For family menbers under one roof. </p></a>
      <a href="#"><p className='premium'>Premium Student</p><p className='subpremium'>Discount for eligible Student</p></a>
    </div>
  </div>
      <Link to={'/support'}> <Nav.Link className='navElements' href="#link">Support</Nav.Link> </Link> 
  <Link to={'download'}>    <Nav.Link className='navElements' href="#link">Download</Nav.Link> </Link>
            <p style={{marginTop:"8px",marginLeft:"20px", fontSize:"18px",fontWeight:"200",marginTop:"15px"}}>|</p>
            &nbsp;&nbsp;&nbsp;&nbsp;
         <Link to={'/signup'}>   <Nav.Link className='navElements2' href="#link">Sign Up</Nav.Link></Link>
         <Link to={'/login'}>   <Nav.Link className='navElements2' href="#link">Log In</Nav.Link> </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default NavBar_Home