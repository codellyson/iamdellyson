import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../../assets/images/logo.png";
function Layout({ children, ...rest }) {
  return (
    <>
      <nav className="nav">
        <div
          className="nav-brand"
          style={{
            width: 200,
          }}
        >
          <Image src={Logo} alt="Logo" />
        </div>
        <ul className={"navMenu"}>
          <li>
            <Link href="/">
              <a> Home</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a> Work</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a> Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a> Contact Me!</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main className={"main"} {...rest}>
        {children}
      </main>
    </>
  );
}

export default Layout;
