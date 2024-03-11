import React from 'react';
import { Form } from 'react-bootstrap';
import { IoIosArrowForward } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import img from '../Asets/spotifyLogo-removebg-preview.png';
import logo from '../Asets/spotifyLogo.jpg';
import '../Styles_Home/Support.css'
import { MdLanguage } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";


function Support() {
  return (
    <div>
        <div className='bdyprt'>
    <div className='logpos'>
        <img className='logo' src={img} alt="" />
        <div className='btnpos'>
        <MdLanguage />
          <button className='bt1'>Explore Premium</button>
          <button className='bt2'>Instal App</button>
          <FaRegUserCircle />
        </div>
    </div><br />
    <p style={{marginRight:"370px",color:"#2A2A2A"}}>Spotify Support</p>
    <h1 style={{color:"white",fontWeight:"700"}}>HOW CAN WE HELP YOU?</h1><br /><br />
    <p style={{color:"gray",fontSize:"20px",fontWeight:"700", marginRight:"250px"}}><a style={{color:"white"}} href="">Log in</a> for faster help</p>
    <br /><br />
    <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 search"
            />
            <div className="parent">
              <div className="child" style={{backgroundColor:"#AF2896"}}> <p className='divtxt'> Payment Help </p><img src="https://cdn.sanity.io/images/tsbk0zvv/production/a1f5c90620915aba2fc363330ecd1dbff17b7736-128x128.png?w=64&fit=max&auto=format" alt="" /></div>
              <div className="child" style={{backgroundColor:"#537AA1"}}> <p className='divtxt'> Payment Help </p><img src="https://cdn.sanity.io/images/tsbk0zvv/production/972abc9b7961e17d356b069c8be9dbaaf3ea51f3-128x128.png?w=64&fit=max&auto=format" alt="" /></div>
              <div className="child" style={{backgroundColor:"#8C1932"}}> <p className='divtxt'> Payment Help </p><img src="https://cdn.sanity.io/images/tsbk0zvv/production/10bb309130cdd8dfe85a0e0e130ecdedc0ca22c6-128x128.png?w=64&fit=max&auto=format" alt="" /></div>
              <div></div><div></div><div></div>
              <div className="child" style={{backgroundColor:"#B06239"}}> <p className='divtxt'> Payment Help </p><img src="https://cdn.sanity.io/images/tsbk0zvv/production/59459c592409b198e88b2b4cd6e4da99306a04fa-128x128.png?w=64&fit=max&auto=format" alt="" /></div>
              <div className="child" style={{backgroundColor:"#006450"}}> <p className='divtxt'> Payment Help </p><img src="https://cdn.sanity.io/images/tsbk0zvv/production/3e2fdd408d9175cbf6dc77fbd24fa0667aec5867-128x128.png?w=64&fit=max&auto=format" alt="" /></div>
              <div className="child" style={{backgroundColor:"#757575"}}> <p className='divtxt'> Payment Help </p><img src="https://cdn.sanity.io/images/tsbk0zvv/production/c39439e03b41892767854a2dafae387d68e397c5-128x128.png?w=64&fit=max&auto=format" alt="" /></div>
            </div>
        </div>

        <div className="bodyprt2">
          <br />
          <h2 style={{color:"white",marginLeft:"-430px"}}>Quick Links</h2>
          <br /><br />
          <ul>
          <li className='list'>
  <a href="">
    <p>Can't remember login details <span><IoIosArrowForward/></span></p>
  </a>
</li>
<li className='list'>
  <a href="www.google.com">
    <p>Failed Payment help <span style={{marginLeft:"365px"}}><IoIosArrowForward/></span></p>
  </a>
</li>
<li className='list'>
  <a href="">
    <p>Charged twice <span style={{marginLeft:"405px"}}><IoIosArrowForward/></span></p>
  </a>
</li>
<li className='list'>
  <a href="">
    <p>Invite or remove Family plan members <span style={{marginLeft:"225px"}}><IoIosArrowForward/></span></p>
  </a>
</li>
<li className='list'>
  <a href="">
    <p>Update payment details <span style={{marginLeft:"325px"}}><IoIosArrowForward/></span></p>
  </a>
</li>

          </ul>
        </div>

        <div className='bodypart2'>
          <br /><br />
          <h1>Visit our Community</h1><br />
          <p>Have questions? Find answers from our worldwide Community of expert fans!</p>
          <br />
          <button className="getPrm">Go to Community</button>
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

export default Support