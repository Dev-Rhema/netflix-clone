import React from "react";
import { NavLink } from "react-router-dom";
// import "../index.css";
import logo from "../netflix-logo.png";

export const Navbar = () => {
  return (
    <>
      <div className="navbar container">
        <img className="logo" src={logo} alt="logo" />
        <nav className="navLinks">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/tvshows">
            TV Shows
          </NavLink>
          <NavLink className="navlink" to="/movies">
            Movies
          </NavLink>
          <NavLink className="navlink" to="/new&popular">
            New & Popular
          </NavLink>
          <NavLink className="navlink" to="/mylist">
            My List
          </NavLink>
        </nav>
      </div>
    </>
  );
};
