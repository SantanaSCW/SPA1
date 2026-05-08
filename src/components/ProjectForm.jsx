import React, { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    description: '', 
    tech: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description) {
      alert("Please fill in the name and description!");
      return;
    }

    // UPDATE: Changed port from 3000 to 3001
    fetch("http://localhost:3001/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((savedProject) => {
      onAddProject(savedProject); 
      setFormData({ name: '', description: '', tech: '' }); 
    })
    .catch((err) => console.error("Error saving project:", err));
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Add New Project</h3>
      <input 
        placeholder="Project Name" 
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <input 
        placeholder="Tech Stack" 
        value={formData.tech}
        onChange={(e) => setFormData({...formData, tech: e.target.value})}
      />
      <textarea 
        placeholder="Description" 
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;