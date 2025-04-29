import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">
            <h1>
              ProjectManager<span className="logo-highlight">.io</span>
            </h1>
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
