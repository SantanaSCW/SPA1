import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Code and Cravings", description: "Restaurant Website", tech: "HTML/CSS" },
    { id: 2, name: "Calc-IT", description: "JS Calculator", tech: "JavaScript" }
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to add a new project
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  // Logic for the Search Feature
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Agency Portfolio</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProjectForm onAddProject={addProject} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;