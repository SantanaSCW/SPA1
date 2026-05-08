import React, { useState, useEffect } from "react";
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
      {/* CHECKLIST: This is now inside the return statement */}
      <div style={{ 
          border: '2px solid #2ecc71', 
          padding: '10px', 
          margin: '20px', 
          borderRadius: '8px',
          backgroundColor: '#e8f8f5' 
      }}>
        <h4>✅ Final Submission Checklist:</h4>
        <ul>
          <li>Projects in State: <strong>{projects.length}</strong></li>
          <li>Search Filter Active: <strong>{searchTerm ? "Yes" : "No"}</strong></li>
          <li>Database Connection: <strong>{projects.length > 0 ? "Online" : "Connecting..."}</strong></li>
        </ul>
      </div>

      <ProjectForm onAddProject={handleAddProject} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProjectList projects={displayedProjects} />
    </main>
  );
}

export default ProjectContainer;