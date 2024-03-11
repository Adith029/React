import React from 'react'
import { Form } from 'react-bootstrap'
import img from '../Asets/spotifyLogo-removebg-preview.png'
import '../Styles_Home/SignUp.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";

function SignUp() {
  return (
    <div>
         <div className='logo'><img src={img} alt="" />
    </div>
    <div style={{marginTop:"100px"}}>
        
       
       
       <Form>
       <h1 className='sign'>Sign up to start <br />listening</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <p style={{textAlign:"left",color:"white"}}>Email address</p> 
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <a href="" style={{textAlign:"left",marginRight:"140px",color:"green"}}>Use phone number instead</a>
      <button className="getPrm">Go to Community</button><br /><br /><br />
      <p style={{color:"white"}}>__________________ or __________________</p>
      <button className='btttn'><FcGoogle />&nbsp;&nbsp;Sign up with Google</button>
      <button className='btttn'><FaFacebook />&nbsp;&nbsp;Sign up with Facebook</button>
      <button className='btttn'><RiAppleLine />&nbsp;&nbsp;Sign up with Apple</button>
      <br /><br />
      <hr style={{color:"gray"}}/> <br />
      <p style={{color:"grey"}}>Already have an account? <a href="" style={{textDecoration:"underline"}}>Log in here.</a></p>
      <br /><br />
      <p style={{fontSize:"12px",color:"grey"}}>This site is protected by reCAPTCHA and the Google
<a href="" style={{fontSize:"12px",color:"grey",textDecoration:"underline"}}>Privacy Policy</a> and <a href="" style={{fontSize:"12px",color:"grey",textDecoration:"underline"}}>Terms of Service </a> apply.</p>
      </Form>
      </div>
    </div>
  )
}

export default SignUp