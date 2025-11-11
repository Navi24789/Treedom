import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Treedom</h2>
          <p>Let's green the planet</p>
        </div>

        {/* Plant Section */}
        <div className="footer-column">
          <h4>Plant</h4>
          <ul>
            <li><a href="#">Plant and gift</a></li>
            <li><a href="#">Activate subscription</a></li>
            <li><a href="#">Grow your own Forest</a></li>
          </ul>
        </div>

        {/* Need Help Section */}
        <div className="footer-column">
          <h4>Need help?</h4>
          <ul>
            <li><a href="#">Customer Care</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">Register of trees</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookie usage</a></li>
            <li><a href="#">Whistleblowing</a></li>
            <li><a href="#">Accessibility statement</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Social</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Treedom s.r.l — All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
