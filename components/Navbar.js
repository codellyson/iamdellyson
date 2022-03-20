import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/Iamdellyson.jpg";
import {
  FaBars,
  FaPhone,
  FaRssSquare,
  FaSuitcase,
  FaTimes,
} from "react-icons/fa";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const closeNav = () => setIsOpen(false);
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-brand">
          <Link href="/" passHref>
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className={isOpen ? "nav-menu full" : "nav-menu"}>
          <li className="nav-menu-item">
            <Link href="/blog">
              <a
                className={
                  router.pathname === "/blog" ||
                  router.pathname == "/blog/[slug]"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={closeNav}
              >
                <span className={isOpen ? "menu-text show" : "menu-text"}>
                  {" "}
                  Blog{" "}
                </span>
                <span className="menu-icon">
                  <FaRssSquare />
                </span>{" "}
              </a>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link href="/works">
              <a
                className={
                  router.pathname === "/works" ? "nav-link active" : "nav-link"
                }
                onClick={closeNav}
              >
                <span className={isOpen ? "menu-text show" : "menu-text"}>
                  {" "}
                  Work
                </span>{" "}
                <span className="menu-icon">
                  <FaSuitcase />
                </span>
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
                onClick={closeNav}
              >
                <span className={isOpen ? "menu-text show" : "menu-text"}>
                  {" "}
                  Contact{" "}
                </span>
                <span className="menu-icon">
                  <FaPhone />
                </span>
              </a>
            </Link>
          </li>
        </ul>
        <div className="nav-toggle-container">
          {isOpen ? (
            <FaTimes onClick={handleToggle} />
          ) : (
            <FaBars onClick={handleToggle} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
