import React, { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import './App.css';

// Initial mock data to ensure the UI isn't blank on initial load
const initialProjects = [
  { 
    id: 1, 
    title: 'E-commerce Redesign', 
    description: 'A modern UX/UI overhaul for a local boutique.', 
    image: 'https://via.placeholder.com/400x300', 
    link: '#' 
  },
  { 
    id: 2, 
    title: 'Social App UI', 
    description: 'User interface design for a new community networking app.', 
    image: 'https://via.placeholder.com/400x300', 
    link: '#' 
  },
];

function App() {
  // State Management
  const [projects, setProjects] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');

  // Event Handling: Adding a new project to the list
  const handleAddProject = (newProject) => {
    // Generate a unique ID using Date.now() for the new project
    const projectWithId = { ...newProject, id: Date.now() };
    setProjects([projectWithId, ...projects]);
  };

  // Logic: Dynamically filter projects based on search state
  // This filters by both title and description for a better user experience
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      {/* Passing search state and setter function as props to Header */}
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="container">
        {/* Debug Status Bar - Helpful for dev, remove for production */}
        <div style={{ 
          padding: '10px', 
          background: '#f1f5f9', 
          border: '1px solid #cbd5e1', 
          borderRadius: '8px', 
          marginBottom: '20px',
          fontSize: '0.9rem' 
        }}>
          <p><strong>Status:</strong> {projects.length > 0 ? "✅ Data Loaded" : "⏳ No Projects Found"}</p>
          <p><strong>Total Projects:</strong> {projects.length} | <strong>Filtered:</strong> {filteredProjects.length}</p>
        </div>

        <section className="form-section">
          <h2>Add New Project</h2>
          <ProjectForm onAddProject={handleAddProject} />
        </section>
        
        <section className="portfolio-section">
          <h2>Our Work</h2>
          {/* Requirement: ProjectList receives the filtered array */}
          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </div>
  );
}

export default App;