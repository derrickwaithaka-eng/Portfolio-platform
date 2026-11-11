import React, { useState } from 'react';
import { initialProjects } from './data/projects';
import { ProjectList } from './components/ProjectList';
import { ProjectForm } from './components/ProjectForm';
import { SearchBar } from './components/SearchBar';
import './App.css';

export default function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  const filteredProjects = projects.filter((project) => {
    const query = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="app-container">
      <header>
        <h1>Creative Agency Portfolio</h1>
      </header>
      <main>
        <ProjectForm onAddProject={handleAddProject} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ProjectList projects={filteredProjects} />
      </main>
    </div>
  );
}