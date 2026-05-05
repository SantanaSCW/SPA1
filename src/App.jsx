import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import Search from "./Search";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Logic to add a new project (passed to ProjectForm)
  function handleAddProject(newProject) {
    setProjects([...projects, newProject]);
  }

  // Logic to filter projects (passed to ProjectList)
  const displayedProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="portfolio-container">
      <h1>Creative Agency Portfolio</h1>
      <ProjectForm onAddProject={handleAddProject} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProjectList projects={displayedProjects} />
    </div>
  );
}

export default App;