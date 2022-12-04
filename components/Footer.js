import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Image
              src={require("../assets/images/Iamdellyson.jpg")}
              alt="footer logo"
              layout={"fixed"}
              // width={200}
              // height={100}
            />
          </div>
          <div className="icons">
            <Link href={"https://www.facebook.com/isiaka.lukman.31"} passHref>
              <FaFacebookSquare />
            </Link>
            {/* <Link href={"https://www.instagram.com.isiaka.lukman.31"} passHref></Link>  <FaInstagramSquare /> */}
            <Link href={"https://www.twitter.com/@codellyson"} passHref>
              <FaTwitter />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/lukman-isiaka-11776b13a"}
              passHref
            >
              <FaLinkedin />
            </Link>
            <Link href={"https://www.github.com/dellysn"} passHref>
              <FaGithub />
            </Link>
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
