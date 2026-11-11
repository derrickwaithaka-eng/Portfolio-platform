import React from 'react';
export function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image || 'https://via.placeholder.com/300x200'} alt={project.title} />
      <h4>{project.title}</h4>
      <span className="badge">{project.category}</span>
      <p>{project.description}</p>
    </div>
  );
}