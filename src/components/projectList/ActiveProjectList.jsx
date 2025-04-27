import { useState } from "react";
import formatDate from "../../utils/formatDate";
import TruncatedText from "../TruncatedText";
import Dialog from "../dialog/Dialog";

import "./ProjectList.css";

function ActiveProjectList({ projects, employees, setProjects }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteProjectId, setDeleteProjectId] = useState(null);

  const handleDelete = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    setShowDeleteModal(false);
  };

  const handleComplete = (id) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "Completed" } : p))
    );
  };

  const getEmployeeNames = (ids) => {
    return employees
      .filter((emp) => ids.includes(emp.id))
      .map((emp) => emp.name)
      .join(", ");
  };

  const activeProjects = projects.filter(
    (project) => project.status === "Active"
  );

  const onDeleteClick = (id) => {
    setDeleteProjectId(id);
    setShowDeleteModal(true);
  };

  return (
    <>
      <div className="project-grid">
        <div className="title-text">Active Projects</div>
        <div className="project-table">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Deadline</th>
                  <th>Priority</th>
                  <th>Assigned Employees</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {activeProjects.length > 0 ? (
                  activeProjects.map((project) => (
                    <tr key={project.id}>
                      <td>{project.name}</td>
                      <td>{formatDate(project.deadline)}</td>
                      <td>{project.priority}</td>
                      <td>
                        {getEmployeeNames(project.employees) ? (
                          <TruncatedText
                            text={getEmployeeNames(project.employees)}
                            maxLength={25}
                          />
                        ) : (
                          "-"
                        )}
                      </td>
                      <td>
                        <div className="button-gap">
                          <button
                            className="button"
                            onClick={() => handleComplete(project.id)}
                          >
                            Complete
                          </button>
                          <button
                            className="delete-button"
                            onClick={() => onDeleteClick(project.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="no-data">
                      No active projects available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="project-cards">
          {activeProjects.length > 0 ? (
            activeProjects.map((project) => (
              <div key={project.id} className="card">
                <h3>{project.name}</h3>
                <p>
                  <strong>Deadline:</strong> {formatDate(project.deadline)}
                </p>
                <p>
                  <strong>Priority:</strong> {project.priority}
                </p>
                <p>
                  <strong>Assigned:</strong>{" "}
                  {getEmployeeNames(project.employees) ? (
                    <TruncatedText
                      text={getEmployeeNames(project.employees)}
                      maxLength={25}
                    />
                  ) : (
                    "-"
                  )}
                </p>
                <div className="card-actions">
                  <button
                    className="button"
                    onClick={() => handleComplete(project.id)}
                  >
                    Complete
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => onDeleteClick(project.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="card no-data-card">
              No active projects available.
            </div>
          )}
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <Dialog
            title="Delete Project"
            onClose={() => setShowDeleteModal(false)}
          >
            <div className="confirm-modal">
              <p>Are you sure you want to delete this project?</p>
              <div className="confirm-buttons">
                <button
                  className="confirm"
                  onClick={() => handleDelete(deleteProjectId)}
                >
                  Yes
                </button>
                <button
                  className="cancel"
                  onClick={() => setShowDeleteModal(false)}
                >
                  No
                </button>
              </div>
            </div>
          </Dialog>
        )}
      </div>
    </>
  );
}

export default ActiveProjectList;
