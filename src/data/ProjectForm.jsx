import React, { useState } from 'react';

export function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({ title: '', description: '', image: '', category: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    
    const newProject = { ...formData, id: Date.now() };
    onAddProject(newProject);
    setFormData({ title: '', description: '', image: '', category: '' });
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Add New Project</h3>
      <input
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Project</button>
    </form>
  );
}