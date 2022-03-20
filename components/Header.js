import React from "react";

function Header({ children }) {
  return (
    <header className="header">
      <div className="container">{children}</div>
    </header>
  );
}

export default Header;
