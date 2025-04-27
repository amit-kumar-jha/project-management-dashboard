import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
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
        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
