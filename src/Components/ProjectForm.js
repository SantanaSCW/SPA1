import React, { useState } from "react";

function ProjectForm({ onAddProject }) {
  // 1. State Management: Using an object keeps state organized
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // 2. Event Handling: Generic handler for all inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // 3. Form Submission Logic
  function handleSubmit(e) {
    e.preventDefault();
    
    // Pass the data back up to the parent (App.js)
    onAddProject(formData);

    // Reset the form fields
    setFormData({ name: "", image: "", description: "" });

    // Provide visual feedback for UX
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  }

  return (
    <section className="form-container">
      <h2>Add a New Project</h2>
      <form onSubmit={handleSubmit} className="project-form">
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Project Title"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="url"
            name="image"
            placeholder="Image URL (e.g., https://...)"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <textarea
            name="description"
            placeholder="Project Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Upload Project
        </button>

        {/* UX Enhancement: Success Message */}
        {isSubmitted && (
          <p className="success-message" style={{ color: 'green', marginTop: '10px' }}>
            ✨ Project added to your portfolio!
          </p>
        )}
      </form>
    </section>
  );
}

export default ProjectForm;