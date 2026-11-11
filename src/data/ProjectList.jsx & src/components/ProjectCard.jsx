// ProjectCard.jsx
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

// ProjectList.jsx
import { ProjectCard } from './ProjectCard';

export function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="no-results">No projects match your search.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}