import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
function Layout({ children, ...rest }) {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.splitbee.io/sb.js";

    document.body.appendChild(script);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main
        className={""}
        {...rest}
        style={{
          minHeight: "100vh",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
