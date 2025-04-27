import React from "react";
import Forms from "../forms/Forms";
import ProjectList from "../projectList/ProjectList";

function ProjectPage({ projects, employees, setProjects, setEmployees }) {
  return (
    <div>
      {" "}
      <Forms
        projects={projects}
        employees={employees}
        setProjects={setProjects}
        setEmployees={setEmployees}
      />
      <ProjectList
        projects={projects}
        employees={employees}
        setProjects={setProjects}
      />
    </div>
  );
}

export default ProjectPage;
