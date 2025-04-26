import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>
            ProjectManager<span className="logo-highlight">.io</span>
          </h1>
        </div>
        <nav className="nav-links">
          <a href="#dashboard">Dashboard</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
