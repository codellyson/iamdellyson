import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./../assets/images/iamdellyson.jpg";
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
          <Link href="/" passHref>
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className={isOpen ? "nav-menu mobile" : "nav-menu"}>
          <li className="nav-menu-item">
            <Link href="/blog">
              <a
                className={
                  router.pathname === "/blog" ||
                  router.pathname == "/blog/[slug]"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Blog
              </a>
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link href="/works">
              <a
                className={
                  router.pathname === "/works" ? "nav-link active" : "nav-link"
                }
              >
                Work
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
                Contact
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
