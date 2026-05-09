import React from 'react';

function ProjectCard({ project }) {
  // A guaranteed Technology-themed fallback image
  const techFallback = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&q=80";

  return (
    <div className="project-card">
      <img 
        src={project.image && project.image.startsWith('http') ? project.image : techFallback} 
        alt={project.title} 
        className="project-image"
        onError={(e) => {
          e.target.onerror = null; // Prevents infinite loops
          e.target.src = techFallback;
        }}
      />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;