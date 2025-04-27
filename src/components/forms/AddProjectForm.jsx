import { useState } from "react";

import "./Forms.css";

function AddProjectForm({ setProjects, closeModal }) {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations
    if (name.trim().length < 3) {
      setError("Project name must be at least 3 characters long.");
      return;
    }

    if (!deadline) {
      setError("Please select a deadline.");
      return;
    }

    if (!priority) {
      setError("Please select a priority.");
      return;
    }

    const newProject = {
      id: Date.now(),
      name: name.trim(),
      deadline,
      priority,
      employees: [],
      status: "Active",
    };

    setProjects((prev) => [...prev, newProject]);
    setName("");
    setDeadline("");
    setPriority("Low");
    setError("");

    if (typeof closeModal === "function") {
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="date"
        value={deadline}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="" disabled>
          Priority
        </option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button className="modal-button" type="submit">
        Add Project
      </button>
    </form>
  );
}

export default AddProjectForm;
