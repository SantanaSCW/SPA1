import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} // Better than index!
          project={project} 
        />
      ))}
    </div>
  );
}

export default ProjectList;