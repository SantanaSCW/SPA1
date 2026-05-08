import React, { useState, useEffect } from "react";
// 1. Updated to match your .jsx extensions and SearchBar name
import ProjectList from "./components/ProjectList.jsx";
import ProjectForm from "./components/ProjectForm.jsx";
import Search from "./components/SearchBar.jsx"; 

function ProjectContainer() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(err => console.error("Check if json-server is running on 3001!", err));
  }, []);

  function handleAddProject(newProject) {
    setProjects([...projects, newProject]);
  }

  const displayedProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <ProjectForm onAddProject={handleAddProject} />
      {/* Note: We imported it as 'Search' above, but it points to SearchBar.jsx */}
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProjectList projects={displayedProjects} />
    </main>
  );
}

export default ProjectContainer;