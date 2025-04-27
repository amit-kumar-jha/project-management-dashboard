import { useState } from "react";
import Dialog from "../dialog/Dialog";
import AddEmployeeForm from "../forms/AddEmployeeForm";

import "./EmployeeList.css";

function EmployeeList({ employees, setEmployees }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState(null);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);

  const handleDelete = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    setShowDeleteModal(false);
  };

  const onDeleteClick = (id) => {
    setDeleteEmployeeId(id);
    setShowDeleteModal(true);
  };

  return (
    <div className="employee-grid">
      <div className="title">
        <div className="title-text">Employee List</div>
        <div>
          <button className="button" onClick={() => setShowEmployeeModal(true)}>
            + Add Employee
          </button>
        </div>
      </div>
      {/* Desktop Table */}
      <div className="employee-table">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.role}</td>
                    <td>
                      <div className="button-gap">
                        <button
                          className="delete-button"
                          onClick={() => onDeleteClick(employee.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-data">
                    No employees available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="employee-cards">
        {employees.length > 0 ? (
          employees.map((employee) => (
            <div key={employee.id} className="card">
              <h3>{employee.name}</h3>

              <p>
                <strong>Role:</strong> {employee.role}
              </p>
              <div className="card-actions">
                <button
                  className="delete-button"
                  onClick={() => onDeleteClick(employee.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="card no-data-card">No Employees Available</div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <Dialog
          title="Delete Employee"
          onClose={() => setShowDeleteModal(false)}
        >
          <div className="confirm-modal">
            <p>Are you sure you want to delete this employee?</p>
            <div className="confirm-buttons">
              <button
                className="confirm"
                onClick={() => handleDelete(deleteEmployeeId)}
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
    </div>
  );
}

export default EmployeeList;
