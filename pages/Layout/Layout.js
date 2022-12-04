import { SplitbeeAnalytics } from "@splitbee/node";
import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
function Layout({ children, ...rest }) {
  return (
    <div className="page-wrapper">
      <div className="container">
        {" "}
        <Navbar />
        <main
          {...rest}
          style={{
            minHeight: "100vh",
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
