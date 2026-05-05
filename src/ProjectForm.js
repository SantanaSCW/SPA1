import React, { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddProject(formData);
    setFormData({ name: "", image: "", description: "" }); // Reset form
  }

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input name="name" placeholder="Project Name" value={formData.name} onChange={handleChange} required />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;