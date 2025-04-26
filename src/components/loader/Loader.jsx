import React from "react";
import "./Loader.css"; // We'll add a little CSS

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
