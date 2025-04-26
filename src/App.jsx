import { useState, useEffect } from "react";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "./utils/localStorageUtils";

import ProjectList from "./components/projectList/ProjectList";
import DashboardSummary from "./components/dashboard/DashboardSummary";

import Loader from "./components/loader/Loader";

import Header from "./components/header/Header";
import Forms from "./components/forms/Forms";

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
        <DashboardSummary projects={projects} />
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
    </div>
  );
}

export default App;
