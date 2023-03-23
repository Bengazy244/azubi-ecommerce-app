import React from "react";
import "../App.css"; // import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="./public/shoplogo.png" alt="Logo" />
      </div>
      <ul className="navbar__links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
      </ul>
      <div className="navbar__login">
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
