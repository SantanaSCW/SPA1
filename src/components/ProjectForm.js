import React, { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({ name: '', description: '', tech: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description) return;
    onAddProject(formData);
    setFormData({ name: '', description: '', tech: '' }); // Reset form
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