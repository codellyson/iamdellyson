import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="icons">
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaTwitter />
            <FaLinkedin />
          </div>
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
