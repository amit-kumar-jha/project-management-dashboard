import { useState } from "react";
import "./Forms.css";

function AddEmployeeForm({ setEmployees, closeModal }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }

    if (!role) {
      setError("Please select a role.");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name: name.trim(),
      role,
    };

    setEmployees((prev) => [...prev, newEmployee]);
    setName("");
    setRole("");
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
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="">Select Role</option>
        <option value="Developer">Developer</option>
        <option value="Manager">Manager</option>
        <option value="Designer">Designer</option>
        <option value="QA">QA</option>
      </select>
      <button className="modal-button" type="submit">
        Add Employee
      </button>
    </form>
  );
}

export default AddEmployeeForm;
