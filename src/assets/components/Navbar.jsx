import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../netflix-logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar container">
        <img className="logo" src={logo} alt="logo" />
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? (
            <span className="close-icon">X</span>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </div>
        <nav className={`navLinks ${isOpen ? "active" : ""}`}>
          <NavLink className="navlink" to="/" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink className="navlink" to="/tvshows" onClick={toggleMenu}>
            TV Shows
          </NavLink>
          <NavLink className="navlink" to="/movies" onClick={toggleMenu}>
            Movies
          </NavLink>
          <NavLink className="navlink" to="/new&popular" onClick={toggleMenu}>
            New & Popular
          </NavLink>
          <NavLink className="navlink" to="/mylist" onClick={toggleMenu}>
            My List
          </NavLink>
        </nav>
      </div>
    </>
  );
};
