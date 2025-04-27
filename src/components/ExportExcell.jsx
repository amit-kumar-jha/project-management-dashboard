import * as XLSX from "xlsx";

function ExportExcel({ projects, employees }) {
  const exportToExcel = () => {
    const projectData = projects.map((project) => ({
      "Project Name": project.name,
      Deadline: project.deadline,
      Priority: project.priority,
      Status: project.status,
      "Assigned Employees": project.employees
        .map((empId) => employees.find((emp) => emp.id === empId)?.name)
        .join(", "),
    }));

    const ws = XLSX.utils.json_to_sheet(projectData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Projects");
    XLSX.writeFile(wb, "Project_Report.xlsx");
  };

  return (
    <button
      className="secondary-button"
      disabled={projects?.length === 0}
      onClick={exportToExcel}
    >
      Export to Excel
    </button>
  );
}

export default ExportExcel;
