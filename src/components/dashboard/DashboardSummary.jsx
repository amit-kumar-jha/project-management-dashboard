import React from "react";
import "./DashboardSummary.css";

function DashboardSummary({ projects, employees }) {
  const totalProjects = projects.length;
  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  return (
    <div className="dashboard-summary">
      <div className="welcome-section">
        <h1>
          Hello, Welcome to <span className="highlight">ProjectManager.io</span>{" "}
          👋
        </h1>
      </div>
      <div className="summary-cards">
        <div className="summary-card total-projects">
          <h3>Total Projects</h3>
          <p>{totalProjects}</p>
        </div>
        <div className="summary-card completed-projects">
          <h3>Completed Projects</h3>
          <p>{completedProjects}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardSummary;
