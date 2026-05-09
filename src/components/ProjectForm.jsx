import React, { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({ title: '', description: '', image: '', link: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Default tech image if user leaves it blank
    const techPlaceholder = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80";
    
    const finalData = {
      ...formData,
      image: formData.image.trim() === "" ? techPlaceholder : formData.image
    };

    onAddProject(finalData);
    setFormData({ title: '', description: '', image: '', link: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input type="text" name="title" placeholder="Project Title" value={formData.title} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Tech Stack / Description" value={formData.description} onChange={handleChange} required />
      <input type="text" name="image" placeholder="Image URL (or leave blank for Tech Image)" value={formData.image} onChange={handleChange} />
      <button type="submit">Publish Project</button>
    </form>
  );
}

export default ProjectForm;