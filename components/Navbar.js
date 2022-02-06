import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-brand">
          <Image src={Logo} alt="Logo" />
        </div>
        <ul className={isOpen ? "nav-menu mobile" : "nav-menu"}>
          <li className="nav-menu-item">
            <Link href="/">
              <a
                className={
                  router.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link href="/portfolio">
              <a
                className={
                  router.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Work
              </a>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link href="/blog">
              <a
                className={
                  router.pathname === "/blog" ? "nav-link active" : "nav-link"
                }
              >
                Blog
              </a>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link href="/contact">
              <a
                className={
                  router.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact Me!
              </a>
            </Link>
          </li>
          <FaTimes onClick={handleToggle} className="nav-close-trigger" />
        </ul>
        <div className="nav-toggle-container">
          <FaBars onClick={handleToggle} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
