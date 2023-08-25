import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <header className="header">
        <h2 className="Logo">Gadget Caring</h2>
        <nav className="navbarItems">
          <li>Home</li>
          <li>Services</li>
          <li>Pricing</li>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
