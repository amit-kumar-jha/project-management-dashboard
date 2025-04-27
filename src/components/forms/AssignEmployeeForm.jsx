import { useState } from "react";

import "./Forms.css";

function AssignEmployeeForm({ projects, employees, setProjects, closeModal }) {
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!selectedProjectId) {
      setError("Please select a project.");
      return;
    }
    if (selectedEmployeeIds.length === 0) {
      setError("Please select at least one employee.");
      return;
    }

    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === Number(selectedProjectId)
          ? {
              ...project,
              employees: [
                ...new Set([...project.employees, ...selectedEmployeeIds]),
              ],
            }
          : project
      )
    );

    setSelectedProjectId("");
    setSelectedEmployeeIds([]);
    setError("");
    if (typeof closeModal === "function") {
      closeModal();
    }
  };

  const handleEmployeeSelect = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedIds = selectedOptions.map((option) => Number(option.value));
    setSelectedEmployeeIds(selectedIds);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
      <select
        value={selectedProjectId}
        onChange={(e) => setSelectedProjectId(e.target.value)}
        required
      >
        <option value="">Select Project</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>

      <div>
        <label htmlFor="employees">Select Employees</label>
        <select
          label="Select Employees"
          multiple
          value={selectedEmployeeIds.map(String)}
          onChange={handleEmployeeSelect}
          size={Math.min(5, employees.length)}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginTop: "8px",
          }}
        >
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name} - {employee.role}
            </option>
          ))}
        </select>
      </div>

      <button className="modal-button" type="submit">
        Assign
      </button>
    </form>
  );
}

export default AssignEmployeeForm;
