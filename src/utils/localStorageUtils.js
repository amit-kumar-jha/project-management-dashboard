// Save to localStorage
export const saveToLocalStorage = (projects, employees) => {
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("employees", JSON.stringify(employees));
};

// Load from localStorage
export const loadFromLocalStorage = () => {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  return { projects, employees };
};
