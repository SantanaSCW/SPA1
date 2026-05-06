import React, { useState, useEffect } from "react";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  // 1. State Management: The main project list
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "E-Commerce Site",
      image: "https://via.placeholder.com/150",
      description: "A full-stack online store built with React."
    },
    {
      id: 2,
      name: "Weather Dashboard",
      image: "https://via.placeholder.com/150",
      description: "Real-time weather tracking using OpenWeather API."
    }
  ]);

  // State for the search query
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Event Handling: Function to add a new project
  const handleAddProject = (newProject) => {
    // Add a unique ID to the new project
    const projectWithId = { ...newProject, id: Date.now() };
    setProjects((prevProjects) => [...prevProjects, projectWithId]);
  };

  // 3. Search Logic: Filtering projects based on name
  // This is calculated during render, which is more efficient than a separate state
  const displayedProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Creative Agency Portfolio</h1>
        <p>Showcasing our best work and innovative solutions.</p>
      </header>

      <main>
        {/* Component for adding new projects */}
        <ProjectForm onAddProject={handleAddProject} />

        <hr className="divider" />

        {/* Search Bar for filtering */}
        <SearchBar 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />

        {/* List for displaying projects */}
        <ProjectList projects={displayedProjects} />
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Creative Agency Portfolio Project</p>
      </footer>
    </div>
  );
}

export default App;