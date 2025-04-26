import { useState } from "react";
import "./ProjectList.css";
import ExportExcel from "../ExportExcell";
import formatDate from "../../utils/formatDate";
import TruncatedText from "../TruncatedText";
import Dialog from "../dialog/Dialog";

function ProjectList({ projects, employees, setProjects }) {
  const [filterPriority, setFilterPriority] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
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

  const filteredProjects = projects.filter((project) => {
    return (
      (filterPriority ? project.priority === filterPriority : true) &&
      (filterStatus ? project.status === filterStatus : true)
    );
  });

  const onDeleteClick = (id) => {
    setDeleteProjectId(id); // Set the project id to delete
    setShowDeleteModal(true); // Open the delete confirmation modal
  };

  return (
    <>
      <div className="project-grid">
        <div className="title">
          <div className="title-text">Projects</div>
          <div>
            <ExportExcel projects={projects} employees={employees} />
          </div>
        </div>

        <div className="filters">
          <select
            onChange={(e) => setFilterPriority(e.target.value)}
            value={filterPriority}
          >
            <option value="">All Priorities</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <select
            onChange={(e) => setFilterStatus(e.target.value)}
            value={filterStatus}
          >
            <option value="">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Desktop Table */}
        <div className="project-table">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Deadline</th>
                  <th>Priority</th>
                  <th>Assigned Employees</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <tr key={project.id}>
                      <td>{project.name}</td>
                      <td>{formatDate(project.deadline)}</td>
                      <td>{project.priority}</td>
                      <td>
                        {" "}
                        {getEmployeeNames(project.employees) ? (
                          <TruncatedText
                            text={getEmployeeNames(project.employees)}
                            maxLength={25}
                          />
                        ) : (
                          "-"
                        )}
                      </td>
                      <td>{project.status}</td>
                      <td>
                        <div className="button-gap">
                          {project.status !== "Completed" && (
                            <button
                              className="button"
                              onClick={() => handleComplete(project.id)}
                            >
                              Complete
                            </button>
                          )}
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
                    <td colSpan="6" className="no-data">
                      No projects available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="project-cards">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
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
                <p>
                  <strong>Status:</strong> {project.status}
                </p>
                <div className="card-actions">
                  {project.status !== "Completed" && (
                    <button
                      className="button"
                      onClick={() => handleComplete(project.id)}
                    >
                      Complete
                    </button>
                  )}
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
            <div className="card no-data-card">No Projects Available</div>
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

export default ProjectList;
