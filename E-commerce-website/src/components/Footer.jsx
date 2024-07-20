import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className="footer-columns">
        <div className="column1">
          <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/black-logo-frokerr-copy-10_pwpomg.jpg" alt="Company Logo"/>
        </div>
        <div className="child">
          <div className="column2">
            <div className="contact11">
              <h4>Quicklink</h4>
            </div>
            <div className="row">
              <span>
                <img className="arr" src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="img"/>
              </span>
              <a className="home" href="/">Home</a>
            </div>
            <div className="row">
              <span>
                <img className="arr" src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="img"/>
              </span>
              <a className="home" href="/about-us">About us</a>
            </div>
            <div className="row">
              <span>
                <img className="arr" src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="img"/>
              </span>
              <a className="home" href="/privacy-policy">Privacy policy</a>
            </div>
            <div className="row"><span><img className="arr" src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg" alt="img"/></span><a className="home" href="/terms-and-conditions">Terms &amp; Conditions</a></div>
          </div> 
          <div className="column3">
            <div className="contact1">
              <h4>Contacts</h4>
            </div>
            <div className="address">
              <span>
              <MdLocationPin className="icon"/>
              </span> 
              <span className="whitefield-bengaluru-560066">Whitefield, Bengaluru, 560066</span>
            </div>
            <div className="mail space">
               <span>
                 <IoIosMail className="icon" />
               </span> 
               <span>
               <div className="whitefield-bengaluru-560066">support@froker.in</div>
               </span>
            </div>
            <div className="social-media space">
            <span>
            <IoLogoTwitter className="icon" />
            </span>
            <span>
            <FaLinkedin className="icon"/>
            </span>
            <span>
            <FaFacebook className="icon" />
            </span>
            <span>
            <FaInstagramSquare className="icon"/>
            </span>
            <span>
            <FaYoutube className="icon"/>
            </span>
            </div>
          </div>  
        </div>
        <div className="column4">
        <div className="scan-to-download1">
        <h4>Scan To Download</h4>
        </div>
        <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009706/Frokerassets/froker-1-3-10_pb9yln.jpg" alt="QR Code"></img>
        </div>
      </div>
      <div className="des">
         <div className="position-relative">
         <div id="footer-image" className="footersvg"></div>
         <div className="centered-text">
         <span className="design">© 2024 Arroz Technology. All rights reserved</span>
      </div>
      </div>    
    </div>
    </div>
  )
}

export default Footer