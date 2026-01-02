import logo from "../assets/logo_disney.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link to="/" className="footer-link">
        <img className="footer-logo" src={logo} alt="Disney Logo" />
      </Link>

      <ul className="footer-menu">
        <li>DISNEY+</li>
        <li><Link to="/movies">MOVIES</Link></li>
        <li><a href="#">PARKS</a></li>
        <li><a href="#">CRUISE</a></li>
      </ul>

      <ul className="footer-menu">
        <li><a href="#">About Disney</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Supplemental Privacy Policy for Indonesia</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Interest-Based Ads</a></li>
      </ul>

      <p>©Disney ©Disney/Pixar © Marvel</p>
    </div>
  );
}

export default Footer;
