import Image from "next/image";
import React from "react";
import Navbar from "../../components/Navbar";
function Layout({ children, ...rest }) {
  return (
    <>
      <Navbar />
      <main
        className={"container"}
        {...rest}
        style={{
          minHeight: "100vh",
        }}
      >
        {children}
      </main>
      <footer className={"footer"}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={"logo"}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}

export default Layout;
