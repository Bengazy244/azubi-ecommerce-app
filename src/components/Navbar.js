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
      <Link to="/RegisterPage">Register</Link>
      <Link to="/SignIn">Signin</Link>
    </div>
  );
};

export default Navbar;
