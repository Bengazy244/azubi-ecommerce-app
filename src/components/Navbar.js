import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
