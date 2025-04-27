import React, { useState } from "react";
import AddProjectForm from "./AddProjectForm";
import AddEmployeeForm from "./AddEmployeeForm";
import AssignEmployeeForm from "./AssignEmployeeForm";
import Dialog from "../dialog/Dialog";

function Forms({ projects, employees, setProjects, setEmployees }) {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  return (
    <div className="title">
      {" "}
      <div className="title-text">All Projects</div>
      <div className="actions">
        <button className="button" onClick={() => setShowProjectModal(true)}>
          + Add Project
        </button>
        <button className="button" onClick={() => setShowEmployeeModal(true)}>
          + Add Employee
        </button>
        <button className="button" onClick={() => setShowAssignModal(true)}>
          + Assign Employee
        </button>
      </div>
      {/* Modals */}
      {showProjectModal && (
        <Dialog title="Add Project" onClose={() => setShowProjectModal(false)}>
          <AddProjectForm
            setProjects={setProjects}
            onClose={() => setShowProjectModal(false)}
            closeModal={() => setShowProjectModal(false)}
          />
        </Dialog>
      )}
      {showEmployeeModal && (
        <Dialog
          title="Add Employee"
          onClose={() => setShowEmployeeModal(false)}
        >
          <AddEmployeeForm
            setEmployees={setEmployees}
            onClose={() => setShowEmployeeModal(false)}
            closeModal={() => setShowEmployeeModal(false)}
          />
        </Dialog>
      )}
      {showAssignModal && (
        <Dialog
          title="Assign Employee"
          onClose={() => setShowAssignModal(false)}
        >
          <AssignEmployeeForm
            projects={projects}
            employees={employees}
            setProjects={setProjects}
            onClose={() => setShowAssignModal(false)}
            closeModal={() => setShowAssignModal(false)}
          />
        </Dialog>
      )}
    </div>
  );
}

export default Forms;
