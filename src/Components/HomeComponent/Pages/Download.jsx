import React from 'react'
import '../Styles_Home/NavBar_Home.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../Styles_Home/Download.css'
import logo from '../Asets/spotifyLogo.jpg'
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
function Download() {
  return (
    <div> <Navbar expand="lg" className="navbg">
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
          <Nav.Link className='navElements' href="#link">Support</Nav.Link>
          <Nav.Link className='navElements' href="#link">Download</Nav.Link>
          <p style={{marginTop:"8px",marginLeft:"20px", fontSize:"18px",fontWeight:"200",marginTop:"15px"}}>|</p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Nav.Link className='navElements2' href="#link">Sign Up</Nav.Link>
          <Nav.Link className='navElements2' href="#link">Log In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <div className='bodygreen'>
<div style={{position:"absolute",left:"900px"}}><img src="https://www-growth.scdn.co/static/download/laptop.svg" alt="" style={{margin:"auto",height:"80px",marginTop:"100px"}}/></div>
<div style={{position:"absolute",left:"940px",top:"185px"}}><img src="https://www-growth.scdn.co/static/download/green-circle.svg" alt="" /></div>
<div style={{position:"absolute",left:"955px",top:"195px"}}><img src="	https://www-growth.scdn.co/static/download/green-success-check.svg" alt="" /></div>
<div style={{position:"relative",top:"225px"}}><h1 style={{fontWeight:"800",fontSize:"50px"}}>Download Spotify</h1><br />
<p style={{textAlign:"center"}}>Play millions of songs and podcasts on your device.</p> </div>
<div style={{position:"absolute", top:"250px",left:"800px"}}>
<button className='btnmicro'><img src="https://get.microsoft.com/images/en-us%20dark.svg" alt="" className='micro'/></button><br /></div>
<div style={{position:"relative"}}>
<a href="" style={{position:"absolute", top:"400px",left:"855px",color:"black"}}>Download directly from Spotify</a></div>
  </div>
  <div style={{backgroundColor:"white",width:"100%",height:"300px"}}>
    <br /><br />
 <h2 style={{fontWeight:"800",fontSize:"30px"}}>Bring your music to mobile and tablet, too.</h2><br />
 <p>Listening on your phone or tablet is free, easy, and fun.</p>
 <div style={{display:"flex",alignItems:"center",marginLeft:"720px"}}>
  <div><img src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-en.svg" alt="" height={50}/></div>
  <div><img src="https://www-growth.scdn.co/static/badges/svgs/google/badge-en.svg" alt="" height={70}/></div>
  <div><img src="https://www-growth.scdn.co/static/badges/microsoft-windows/en.png" alt="" height={50}/></div>
 </div></div>
 <div className='oneacc'>
  <div className='tr'><img src="https://www-growth.scdn.co/static/download/all-devices.svg" alt=""  className='comp'/></div><br /><br /><br />
  <h2 style={{fontWeight:"800",fontSize:"35px",color:"white"}}>One account, listen everywhere.</h2><br />
  <ul style={{display:"flex",marginLeft:"450px"}}>
  <li style={{listStyle:"none"}}>MOBILE</li>
  <li style={{listStyle:"none"}}>COMPUTER</li>
  <li style={{listStyle:"none"}}>TABLET</li>
  <li ><a style={{color:"green"}} href="">CAR</a></li>
  <li ><a style={{color:"green"}} href="">PLAYSTATION</a></li>
  <li><a style={{color:"green"}} href="">XBOX</a></li>
  <li><a style={{color:"green"}} href="">TV</a></li>
  <li><a style={{color:"green"}} href="">SPEAKER</a></li>
  <li><a style={{color:"green"}} href="">WEBPLAYER</a></li>
 </ul>
 </div>
 
 <footer class="footer">
  <div class="footer-inner">
    <img src={logo} alt="" height={40} />
    <div class="footer-container">
  <div>
    <p>PREMIUM</p>
    <ul class="nobull">
      <li class="footer-item"><a href="#" class="footer-link">Premium <br />Individual</a></li>
      <li class="footer-item"><a href="#" class="footer-link">Premium Duo</a></li>
      <li class="footer-item"><a href="#" class="footer-link">Premium Family</a></li>
      <li class="footer-item"><a href="#" class="footer-link">Premium <br />Student</a></li>
    </ul>
  </div>
  <div>
    <p>COMPANY</p>
    <ul class="nobull">
      <li class="footer-item"><a href="#" class="footer-link">About</a></li>
      <li class="footer-item"><a href="#" class="footer-link">Jobs</a></li>
      <li class="footer-item"><a href="#" class="footer-link">For the Record</a></li>
    </ul>
  </div>
  <div>
    <p>COMMUNITIES</p>
    <ul class="nobull">
      <li class="footer-item"><a href="#" class="footer-link">Artists</a></li>
      <li class="footer-item"><a href="#" class="footer-link">Developers</a></li>
      <li class="footer-item"><a href="#" class="footer-link">Advertising</a></li>
      <li class="footer-item"><a href="#" class="footer-link">Investors</a></li>
      <li class="footer-item"><a href="#" class="footer-link">Vendors</a></li>
    </ul>
  </div>
  <div>
    <p>USEFUL LINKS</p>
    <ul class="nobull">
      <li class="footer-item"><a href="#" class="footer-link">Support</a></li>
      <li class="footer-item"><a href="#" class="footer-link">Web Player</a></li>
      <li class="footer-item"><a href="#" class="footer-link">Free Mobile <br />App</a></li>
    </ul>
  </div>
</div>

    <div class="footer-social">
      <ul>
        <li><a href="#" class="footer-social-link"><TiSocialFacebook /></a></li>
        <li><a href="#" class="footer-social-link"><SlSocialInstagram /></a></li>
        <li><a href="#" class="footer-social-link"><TiSocialTwitter /></a></li>
      </ul>
    </div>
    <div class="footer-menu">
      <ul>
        <li><a href="#" class="footer-menu-link">Legal</a></li>
        <li><a href="#" class="footer-menu-link">Privacy Center</a></li>
        <li><a href="#" class="footer-menu-link">Privacy Policy</a></li>
        <li><a href="#" class="footer-menu-link">Cookies</a></li>
        <li><a href="#" class="footer-menu-link">About Ads</a></li>
        <li><a href="#" class="footer-menu-link">Accessibility</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Spotify AB</p>
  </div>
</footer>
  </div>
  )
}

export default Download