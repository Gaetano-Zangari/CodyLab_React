function ProjectList({ projects }) {
  return (
    <div>
      <h2 className="form-title">Project List</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id} className="card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Start: {project.startDate} - End: {project.endDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
