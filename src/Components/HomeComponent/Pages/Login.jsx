import React from 'react'
import '../Styles_Home/Login.css'
import logo from '../Asets/spotifyLogo-removebg-preview.png'
import { Button, Container, Form, Navbar } from 'react-bootstrap'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";
function Login() {
  return (
    <div >
        
        <Navbar expand="lg" className="navbg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" className='logo' /></Navbar.Brand>
      </Container>
    </Navbar>
        
        <div className='body'>
        <Form>
            <h1 className='sign'>Log in to Spotify</h1>
            <button className='btttn'><FcGoogle />&nbsp;&nbsp;Sign up with Google</button>
      <button className='btttn'><FaFacebook />&nbsp;&nbsp;Sign up with Facebook</button>
      <button className='btttn'><RiAppleLine />&nbsp;&nbsp;Sign up with Apple</button>
      <button className='btttn'>Continue with Phone number</button>
    <br /><br /><br /><br /><hr style={{width:"90%",margin:"auto"}}/>
      
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <p style={{textAlign:"left",color:"white",marginLeft:"130px"}}>Email address</p> 
        <Form.Control type="email" placeholder="Email or username" className='sizetxt' />
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <p style={{textAlign:"left",color:"white",marginLeft:"130px"}}>Password</p> 
      <Form.Control type="password" placeholder="Password" className='sizetxt'  />
    </Form.Group>
    <br />
    <button className="getPrm">Log in</button>
    <br /><br />
    <a href="" style={{textDecoration:"underline"}}>Forgot your password</a><br /><br />
    <hr style={{width:"90%",margin:"auto"}}/>
    <p style={{color:"grey"}}>Dont't have an account? <a href="" style={{textDecoration:"underline"}}> Sign up for Spotify</a></p>
  </Form>
  </div>
    <footer className='ftr'>
    <p style={{fontSize:"12px",color:"grey"}}>This site is protected by reCAPTCHA and the Google
<a href="" style={{fontSize:"12px",color:"grey",textDecoration:"underline"}}>Privacy Policy</a> and <a href="" style={{fontSize:"12px",color:"grey",textDecoration:"underline"}}>Terms of Service </a> apply.</p>
 
    </footer>
  </div>
  )
}

export default Login