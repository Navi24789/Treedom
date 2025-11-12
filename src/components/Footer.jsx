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
            <li><a href="/plant">Plant and gift</a></li>
            <li><a href="/subscription">Activate subscription</a></li>
            <li><a href="/forest">Grow your own Forest</a></li>
          </ul>
        </div>

        {/* Need Help Section */}
        <div className="footer-column">
          <h4>Need help?</h4>
          <ul>
            <li><a href="/support">Customer Care</a></li>
            <li><a href="/contact">Contacts</a></li>
            <li><a href="/trees">Register of trees</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/cookies">Cookie usage</a></li>
            <li><a href="/whistleblowing">Whistleblowing</a></li>
            <li><a href="/accessibility">Accessibility statement</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Social</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
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
