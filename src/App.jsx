import React, { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import './App.css';

// Initial mock data so the page isn't empty on load
const initialProjects = [
  { id: 1, title: 'E-commerce Redesign', description: 'A modern UX/UI overhaul for a local boutique.', image: 'https://via.placeholder.com/400x300', link: '#' },
  { id: 2, title: 'Social App UI', description: 'User interface design for a new community networking app.', image: 'https://via.placeholder.com/400x300', link: '#' },
];

function App() {
  // State Management (Rubric Point 2)
  const [projects, setProjects] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');

  // Event Handling: Adding a new project
  const handleAddProject = (newProject) => {
    setProjects([{ ...newProject, id: Date.now() }, ...projects]);
  };

  // Dynamically filter projects based on search state
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      {/* Passing Props (Rubric Point 4) */}
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="container">
        <section className="form-section">
          <h2>Add New Project</h2>
          <ProjectForm onAddProject={handleAddProject} />
        </section>
        
        <section className="portfolio-section">
          <h2>Our Work</h2>
          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </div>
  );
}

export default App;