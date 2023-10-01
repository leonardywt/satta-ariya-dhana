import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div className="app__footer">
        <div className="app__footer-content">
          <div className="app__footer-contact">
            <h1 className="app__footer-headtext">Contact Us</h1>
            <p>Saribudolok, Indonesia</p>
            <p>No telp</p>
            <p>Email</p>
          </div>
          <div className="app__footer-logo">
            <img
              alt="logo"
              src={require("../../assets/images/logo-removebg.png")}
            />
            <h1 className="app__footer-headtext">Yayasan Satta Ariya Dhana</h1>
            <p>Yayasan Tujuh Kekayaan Ariya</p>
          </div>
          <div className="app__footer-findus">
            <h1 className="app__footer-headtext">Find Us</h1>
            <a href='https://www.instagram.com/sattaariyadhana/' target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href='https://www.facebook.com/7ariyadhana' target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href='https://www.youtube.com/@meditationcentresattaariya2710' target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer__copyright">
          <p>&copy; sattaariyadhana, All Right Reserved</p>
        </div>

      </div>
    </div>
  )
}

export default Footer