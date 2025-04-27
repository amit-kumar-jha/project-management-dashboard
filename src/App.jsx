import { useState, useEffect } from "react";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "./utils/localStorageUtils";
import DashboardSummary from "./components/dashboard/DashboardSummary";
import Loader from "./components/loader/Loader";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./components/pages/ProjectPage";

function App() {
  const [projects, setProjects] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { projects, employees } = loadFromLocalStorage();
    setProjects(projects);
    setEmployees(employees);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!loading) {
      saveToLocalStorage(projects, employees);
    }
  }, [projects, employees, loading]);

  if (loading) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="container">
        <Routes>
          {/* Dashboard (Home) */}
          <Route
            path="/"
            element={
              <DashboardSummary
                projects={projects}
                employees={employees}
                setProjects={setProjects}
                setEmployees={setEmployees}
              />
            }
          />
          {/* Project Page */}
          <Route
            path="/project"
            element={
              <ProjectPage
                projects={projects}
                employees={employees}
                setEmployees={setEmployees}
                setProjects={setProjects}
              />
            }
          />
        </Routes>

        {/* Modals and Export buttons */}
        {/* keep your Modals, Buttons, ExportExcel, etc here if needed */}
      </div>
    </div>
  );
}

export default App;
