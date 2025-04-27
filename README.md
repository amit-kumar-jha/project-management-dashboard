# Employee Management Project

This project provides a platform for managing employees, including listing, deleting, and displaying details of each employee. It has a responsive UI that adapts to desktop and mobile devices.

## Prerequisites

Before you can run the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) (Node Package Manager)

If you don't have them installed, follow the installation instructions on the official websites.

## Steps to Run the Project

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

Open your terminal and run the following command to clone the repository:

git clone <repository-url>

### 2. Navigate to the Project Folder

cd employee-management

### 3. Install Dependencies

npm install

### 4. Run the Development Server

npm run dev

# ✅ Completed Features

## 1. Add Project

- Add a new project with the following fields:
  - **Project Name**
  - **Deadline** (Date)
  - **Priority** (Low / Medium / High)

## 2. Add Employee

- Add a new employee with the following fields:
  - **Name**
  - **Role** (e.g., Developer, Manager)

## 3. Assign Employee to Project

- Allow assigning one or more employees to a specific project.
- View the list of assigned employees for each project.

## 4. List View

- Display all projects in a **table** (for desktop) and **card view** (for mobile).
- Each project shows:
  - **Project Name**
  - **Deadline**
  - **Priority**
  - **Assigned Employees**

## 5. Delete a Project or Employee

- Delete any project or employee from the list with confirmation popups to prevent accidental deletions.

## 6. Mark a Project as Completed

- Update a project’s **status** to "Completed" once it's finished.
- Visually differentiate completed projects from ongoing ones.

## 7. Filter Projects

- Filter the project list based on:
  - **Priority** (Low, Medium, High)
  - **Status** (Completed, Ongoing)

## 8. Save Data in localStorage

- Automatically save all:
  - Projects
  - Employees
  - Assignments
  - Status updates
- Data persists even after page refresh (simulating backend persistence).

## 9. Export Excel Report

- Export a complete Excel report that includes:
  - List of projects
  - Assigned team members
  - Project priority
  - Project status (Completed/Ongoing)
- Downloadable in `.xlsx` format for offline record keeping.

## 10. Dashboard Summary

- Show a quick dashboard with summarized statistics:
  - **Total number of projects**
  - **Total number of completed projects**
  - **Active Projects**
  - **EmployeeList**

# 🚀 Highlights of the Project

## Complete CRUD Functionality

- Create, Read, Update (Status), and Delete operations for both Projects and Employees.

## Mobile Responsive Design

- Adaptive views — Table for Desktop, Cards for Mobile.

## Smooth User Experience

- Modal dialogs for delete confirmations, filter dropdowns, clean layout.

## LocalStorage Persistence

- No backend needed! All data saved locally and survives page refresh.

## Excel Export

- One-click export of full project data into a ready-to-use Excel file (.xlsx).

## Extensible Architecture

- Easy to plug in a real backend later (like Node.js, Firebase, etc.) with minimal code change.
