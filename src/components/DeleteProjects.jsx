import React from "react";

const DeleteProjects = ({ projects, onDelete }) => {
  return (
    <div>
      <h2 className="form-title">Delete Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id} className="card">
            <span>{project.name}</span>
            <button onClick={() => onDelete(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteProjects;
