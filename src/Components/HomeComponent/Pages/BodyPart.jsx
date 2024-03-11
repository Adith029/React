import React from "react";
import "../Styles_Home/BodyPart.css";
import { FaMinus } from "react-icons/fa6";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TiSocialTwitter, TiTick } from "react-icons/ti";
import { Accordion } from "react-bootstrap";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import logo from '../Asets/spotifyLogo.jpg'


function BodyPart() {
  return (
    <div className="gradient">
      <img
        src="https://wwwmarketing.scdn.co/static/images/premium/desktop-album-evergreen-1x.png"
        class="img-fluid"
        alt=""
        className="bdyImg"
      />
      <div className="limits">
        <p className="limitspara">
          Listen without limits. Try <br />2 months of Premium for <br /> ₹119.
        </p>
        <p className="listen">
          Listen to music without ad breaks and play offline, until 9 April 2024
          Cancel <br />
          anytime.
        </p>
        <div className="twobtns">
          <button className="getPrm">Get Premium Individual</button>
          <button className="View">View all plans</button>
        </div>
        <p className="one19">
          ₹119 for 2 months, then ₹119 per month after. Offer only <br />
          available if you haven't tried Premium before.
          <a href="" className="terms">
            Terms apply
          </a>{" "}
        </p>
      </div>

      <h1 className="headn">Experience the difference</h1>
      <h4 style={{ color: "white" }}>
        Go Premium and enjoy full control of your listening. Cancel <br />
        anytime.
      </h4>
      <table>
        <tr>
          <th style={{ paddingTop: "100px" }}>What you'll get</th>
          <th className="spot">
            Spotify's <br />
            Free plan
          </th>
          <th
            className="spot"
            style={{
              backgroundColor: "rgb(26, 26, 26)",
              height: "50px",
              textAlign: "center",
            }}
          >
            <img
              src="https://i.pinimg.com/236x/ce/d8/eb/ced8ebf0f517b64cf55413b0a5b6a61c.jpg"
              alt=""
              height={20}
            />{" "}
            Premium
          </th>
        </tr>
        <tr>
          <td>Ad-free music listening</td>
          <td>
            <FaMinus style={{ color: "gray", fontSize: "30px" }} />
          </td>
          <td
            style={{
              backgroundColor: "rgb(26, 26, 26)",
              height: "50px",
              textAlign: "center",
            }}
          >
            <BsFillCheckCircleFill />
          </td>
        </tr>
        <tr>
          <td>Download to listen offline</td>
          <td>
            <FaMinus style={{ color: "gray", fontSize: "30px" }} />
          </td>
          <td
            style={{
              backgroundColor: "rgb(26, 26, 26)",
              height: "50px",
              textAlign: "center",
            }}
          >
            <BsFillCheckCircleFill />
          </td>
        </tr>
        <tr>
          <td>Play songs in any order</td>
          <td>
            <FaMinus style={{ color: "gray", fontSize: "30px" }} />
          </td>
          <td
            style={{
              backgroundColor: "rgb(26, 26, 26)",
              height: "50px",
              textAlign: "center",
            }}
          >
            <BsFillCheckCircleFill />
          </td>
        </tr>
        <tr>
          <td>High audio quality</td>
          <td>
            <FaMinus style={{ color: "gray", fontSize: "30px" }} />
          </td>
          <td
            style={{
              backgroundColor: "rgb(26, 26, 26)",
              height: "50px",
              textAlign: "center",
            }}
          >
            <BsFillCheckCircleFill />
          </td>
        </tr>
        <tr>
          <td>Listen with friends in real time</td>
          <td>
            <FaMinus style={{ color: "gray", fontSize: "30px" }} />
          </td>
          <td
            style={{
              backgroundColor: "rgb(26, 26, 26)",
              height: "50px",
              textAlign: "center",
            }}
          >
            <BsFillCheckCircleFill />
          </td>
        </tr>
        <tr>
          <td>Organize listening queue</td>
          <td>
            <FaMinus style={{ color: "gray", fontSize: "30px" }} />
          </td>
          <td
            style={{
              backgroundColor: "rgb(26, 26, 26)",
              height: "50px",
              textAlign: "center",
            }}
          >
            <BsFillCheckCircleFill />
          </td>
        </tr>
      </table>
      <h1 className="headn">Affordable plans for any situation</h1>
      <h5 style={{ color: "white" }}>
        Choose a Premium plan and listen to ad-free music without limits on your
        phone, speaker, <br /> and other devices. Pay in various ways. Cancel
        anytime.
      </h5>
      <div style={{ display: "inline-flex", paddingRight: "10px" }}>
        <img
          src="https://i.pinimg.com/564x/67/c8/7d/67c87d420f58c250b3b7aecb034350b6.jpg"
          alt=""
          style={{ height: "30px", paddingRight: "10px" }}
        />
        <img
          src="https://i.pinimg.com/564x/de/72/b5/de72b5cd21b9c827639853f666b51b50.jpg"
          alt=""
          style={{ height: "30px", paddingRight: "10px" }}
        />
        <img
          src="https://i.pinimg.com/564x/63/dd/d9/63ddd963a635a1cfe4e06ee149a8bbf9.jpg"
          alt=""
          style={{ height: "30px", paddingRight: "10px" }}
        />
        <img
          src="https://i.pinimg.com/564x/6e/79/ac/6e79ac75e164ffa85f36f772fdaa41aa.jpg"
          alt=""
          style={{ height: "30px", paddingRight: "10px" }}
        />
        <img
          src="https://i.pinimg.com/564x/8e/e6/cf/8ee6cf4afedecc27f2e1337e5a37b42d.jpg"
          alt=""
          style={{ height: "30px", paddingRight: "10px" }}
        />
      </div>
      <div className="h2o">
        <h2 className="h2">ALL Premium plan include</h2>
      </div>
      <div className="ticck">
        <p className="tick">
          <TiTick />
          Ad-free music listening
        </p>
        <p className="tick">
          <TiTick />
          Download to listen offline
        </p>
        <p className="tick">
          <TiTick />
          Play songs in any order
        </p>
        <p className="tick">
          <TiTick />
          High audio quality
        </p>
        <p className="tick">
          <TiTick />
          Listen with friends in real time
        </p>
        <p className="tick">
          <TiTick />
          Organize listening queue
        </p>
      </div>
      <div className="parent">
        <div className="child">
          <p
            style={{
              color: "white",
              fontSize: "14px",
              textAlign: "left",
              marginLeft: "10px",
            }}
          >
            <img
              src="https://i.pinimg.com/236x/ce/d8/eb/ced8ebf0f517b64cf55413b0a5b6a61c.jpg"
              alt=""
              height={20}
            />
            Premium
          </p>
          <h2 style={{color:"#CFF56A",textAlign:"left",marginLeft:"10px"}}>Mini</h2>
          <p style={{color:"white",textAlign:"left",marginLeft:"10px"}}><b>₹7 for 1 day</b></p>
          
          <hr style={{width:"90%",color:"white",margin:"auto"}}/>
          
          <ul>
  <li>1 mobile-only Premium account</li>
  <li>Offline listening of up to 30 songs on 1 device</li>
  <li>One-time payment</li>
<li>Basic audio quality</li>
</ul>
<br /><br />
<button className="getPrm" style={{backgroundColor:"#CFF56A"}}>Get Premium Mini</button>
<br />
<a href="" className="terms" style={{color:"gray"}}>
            Terms apply
          </a>
        </div>
        <div className="child">
          <div
            style={{
              backgroundColor: "#FFD2D7",
              width: "150px",
              borderTopLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            ₹119 for 2 months
          </div>
          <p
            style={{
              color: "white",
              fontSize: "14px",
              textAlign: "left",
              marginLeft: "10px",
              marginTop: "20px",
            }}
          >
            <img
              src="https://i.pinimg.com/236x/ce/d8/eb/ced8ebf0f517b64cf55413b0a5b6a61c.jpg"
              alt=""
              height={20}
            />
            Premium
          </p>
          <h2 style={{color:"#FFD2D7",textAlign:"left",marginLeft:"10px"}}>Individual</h2>
          <p style={{color:"white",textAlign:"left",marginLeft:"10px"}}><b>₹119 for 2 months</b></p>
          <p style={{color:"gray",textAlign:"left",marginLeft:"10px",fontSize:"10px",marginTop:"-10px"}}>₹119 / month after</p>
          <br />
          <hr style={{width:"90%",color:"white",margin:"auto"}}/>
          <br />
          <ul>
  <li>
1 Premium account</li>
  <li>
Cancel anytime</li>
  <li>One-time payment</li>
</ul><br />
<button className="getPrm" style={{backgroundColor:"#FFD2D7"}}>Get Premium Individual</button>
<p style={{color:"gray",fontSize:"12px"}}>₹119 for 2 months, then ₹119 per month after. Offer only available if you haven't tried Premium before. <a href="" className="terms" style={{color:"gray"}}>Terms apply.</a></p>

        </div>
        <div className="child">
          {" "}
          <div
            style={{
              backgroundColor: "#C4B1D4",
              width: "150px",
              borderTopLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            ₹59 for 2 months
          </div>
          <p
            style={{
              color: "white",
              fontSize: "14px",
              textAlign: "left",
              marginLeft: "10px",
              marginTop: "20px",
            }}
          >
            <img
              src="https://i.pinimg.com/236x/ce/d8/eb/ced8ebf0f517b64cf55413b0a5b6a61c.jpg"
              alt=""
              height={20}
            />
            Premium
          </p>
          <h2 style={{color:"#C4B1D4",textAlign:"left",marginLeft:"10px"}}>Student</h2>
          <p style={{color:"white",textAlign:"left",marginLeft:"10px"}}><b>₹59 for 2 months</b></p>
          <p style={{color:"gray",textAlign:"left",marginLeft:"10px",fontSize:"10px",marginTop:"-10px"}}>₹59 / month after</p>
        
          
          <br />
          <hr style={{width:"90%",color:"white",margin:"auto"}}/>
          <br />
          <ul>
  <li>1 verified Premium account</li>
  <li>Discount for eligible students</li>
  <li>
Cancel anytime</li>
</ul>
<button className="getPrm" style={{backgroundColor:"#C4B1D4"}}>Get Premium Student</button>
<p style={{color:"gray",fontSize:"12px"}}>₹59 for 2 months, then ₹59 per month after. Offer available only to students at an accredited higher education institution and if you haven't tried Premium before.<a href="" className="terms" style={{color:"gray"}}>Terms apply.</a></p>

        </div>
      </div>
      <div className="parent2">
        <div className="child2">
        <div
            style={{
              backgroundColor: "#FFC862",
              width: "150px",
              borderTopLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            ₹59 for 2 months
          </div><p
            style={{
              color: "white",
              fontSize: "14px",
              textAlign: "left",
              marginLeft: "10px",
              marginTop: "20px",
            }}
          >
            <img
              src="https://i.pinimg.com/236x/ce/d8/eb/ced8ebf0f517b64cf55413b0a5b6a61c.jpg"
              alt=""
              height={20}
            />
            Premium
          </p>
          <h2 style={{color:"#FFC862",textAlign:"left",marginLeft:"10px"}}>Duo</h2>
          <p style={{color:"white",textAlign:"left",marginLeft:"10px"}}><b>₹149 for 2 months</b></p>
          <p style={{color:"gray",textAlign:"left",marginLeft:"10px",fontSize:"10px",marginTop:"-10px"}}>₹149 / month after</p>
         
          <hr style={{width:"90%",color:"white",margin:"auto"}}/>
          
          <ul>
  <li>1 mobile-only Premium account</li>
  <li>Offline listening of up to 30 songs on 1 device</li>
  <li>One-time payment</li>
<li>Basic audio quality</li>
</ul>
<button className="getPrm" style={{backgroundColor:"#FFC862"}}>Get Premium Duo</button>
<p style={{color:"gray",fontSize:"12px"}}>₹149 for 2 months, then ₹149 per month after. Offer only available if you haven't tried Premium before. For couples who reside at the same address. Terms apply.<a href="" className="terms" style={{color:"gray"}}>Terms apply.</a></p>

          </div>
        <div className="child2"><div
            style={{
              backgroundColor: "#A5BBD1",
              width: "150px",
              borderTopLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            ₹59 for 2 months
          </div><p
            style={{
              color: "white",
              fontSize: "14px",
              textAlign: "left",
              marginLeft: "10px",
              marginTop: "20px",
            }}
          >
            <img
              src="https://i.pinimg.com/236x/ce/d8/eb/ced8ebf0f517b64cf55413b0a5b6a61c.jpg"
              alt=""
              height={20}
            />
            Premium
          </p>
          <h2 style={{color:"#A5BBD1",textAlign:"left",marginLeft:"10px"}}>Family</h2>
          <p style={{color:"white",textAlign:"left",marginLeft:"10px"}}><b>₹179 for 2 months</b></p>
          <p style={{color:"gray",textAlign:"left",marginLeft:"10px",fontSize:"10px",marginTop:"-10px"}}>₹179 / month after</p>
        
          
          <hr style={{width:"90%",color:"white",margin:"auto"}}/>
          
          <ul>
  <li>1 mobile-only Premium account</li>
  <li>Offline listening of up to 30 songs on 1 device</li>
  <li>One-time payment</li>
<li>Basic audio quality</li>
</ul>
<button className="getPrm" style={{backgroundColor:"#A5BBD1"}}>Get Premium Family</button>
<p style={{color:"gray",fontSize:"12px"}}>₹179 for 2 months, then ₹179 per month after. Offer only available if you haven't tried Premium before. For up to 6 family members residing at the same address. Terms apply.<a href="" className="terms" style={{color:"gray"}}>Terms apply.</a></p>
</div>
      </div>
      <br /><br /><br />

      <h1 className="headn">Questions?</h1>
      <p style={{color:"white"}}>We've got answers. <br />

Get even more questions answered <a href="" style={{color:"white"}}>here</a>.</p>

      <Accordion defaultActiveKey="0" flush className="acc" style={{backgroundColor:"black"}}>
      <Accordion.Item eventKey="0" className="acch">
        <Accordion.Header className="acch2">How does the Spotify Premium trial work?</Accordion.Header>
        <Accordion.Body style={{textAlign:"left"}}>
        If you've never had Premium before, you may be eligible for a free (or reduced rate) trial. <br />

For trials, you'll still need to enter a valid payment method to sign up. We'll use this to confirm your country or region and take payments if you want to keep Premium after the offer ends. <br />

We'll send you a reminder 7 days before your trial ends. Country restrictions and Terms apply.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="acch" class="bg-dark">
        <Accordion.Header class="bg-dark" className="acch">How do I cancel my Premium plan?</Accordion.Header>
        <Accordion.Body style={{textAlign:"left"}}>
        You can easily cancel your Premium plan any time online on your account page. Your Premium stays until your next billing date, then your account switches over to our free plan. <br />

You'll keep all your playlists, saved music, and be able to listen with ads when your account is free.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className="acch">
        <Accordion.Header>How does the Premium Duo plan work?</Accordion.Header>
        <Accordion.Body style={{textAlign:"left"}}>
        You can easily cancel your Premium plan any time online on your account page. Your Premium stays until your next billing date, then your account switches over to our free plan. <br />

You'll keep all your playlists, saved music, and be able to listen with ads when your account is free.        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className="acch">
        <Accordion.Header>How does the Premium Family plan work?</Accordion.Header>
        <Accordion.Body style={{textAlign:"left"}}>
        Premium Family is a plan for up to 6 family members who live together. Compared with everyone having their own full-price Premium Individual account, it's also cheaper. We will ask for your address to ensure you live at the same address. You can invite members to the plan right after the purchase. Each member has their own separate Premium account and can listen at the same time with their own account. All saved music and playlists are their own. Other account holders cannot see what you are listening to. <br />
        Read more info about Premium Family.
         </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className="acch">
        <Accordion.Header>How does the Premium Student Plan work?</Accordion.Header>
        <Accordion.Body style={{textAlign:"left"}}>
        If you are a student enrolled at an accredited college or university, and above the age of 18, then yes. You can get Premium Student for up to 4 years. <br />

Read more info about Premium Student.
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" className="acch">
        <Accordion.Header>How much is Spotify Premium in India?</Accordion.Header>
        <Accordion.Body style={{textAlign:"left"}}>
        The Spotify Premium prices in India are different depending on which Premium plan you choose: The Spotify Premium Mini plan costs ₹7 for 1 day, the Premium Individual plan costs ₹119 per month, the Premium Duo plan costs ₹149 per month, the Premium Family plan costs ₹179 per month, the Premium Student plan costs ₹59 per month. If you've never had a Premium plan before, you may be eligible for a free (or reduced rate) trial. Country restrictions and terms apply.
         </Accordion.Body>
      </Accordion.Item>
    </Accordion>

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
  );
}

export default BodyPart;
