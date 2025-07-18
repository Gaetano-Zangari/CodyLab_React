import './App.css';
import UserList from './components/UserList';
import ProjectList from './components/ProjectList';
import CreateUser from './components/CreateUsers';
import DeleteUsers from './components/DeleteUsers';
import AddProject from './components/AddProject';
import DeleteProjects from './components/DeleteProjects';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  const AUTH_HEADER = { "Authorization": "Basic dXNlcjpwYXNzd29yZA==" };

  const fetchData = async () => {
    fetch("http://localhost:8090/api/v1/users", { method: "GET", headers: AUTH_HEADER })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => console.error("Error loading users:", err));

+    fetch("http://localhost:8090/api/v1/projects", { method: "GET", headers: AUTH_HEADER })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then(data => setProjects(data))
      .catch(err => console.error("Error loading projects:", err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProject = async (id) => {
    await fetch(`http://localhost:8090/api/v1/projects/${id}`, {
      method: "DELETE",
      headers: AUTH_HEADER
    });
    const res = await fetch("http://localhost:8090/api/v1/projects", { headers: AUTH_HEADER });
    setProjects(await res.json());
  };

  const addProject = async (project) => {
    const response = await fetch(`http://localhost:8090/api/v1/users/username/${project.manager}`, {headers: AUTH_HEADER});
    if (!response.ok) {
      alert("Manager not found! Please enter a valid username.");
      return;
    }

    await fetch("http://localhost:8090/api/v1/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...AUTH_HEADER },
      body: JSON.stringify(project)
    });

    const res = await fetch("http://localhost:8090/api/v1/projects", { headers: AUTH_HEADER });
    setProjects(await res.json());
  };

  const addUser = async (user) => {
    await fetch("http://localhost:8090/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...AUTH_HEADER },
      body: JSON.stringify(user)
    });

    const res = await fetch("http://localhost:8090/api/v1/users", { headers: AUTH_HEADER });
    setUsers(await res.json());
  };

  const deleteUser = async (id) => {
    await fetch(`http://localhost:8090/api/v1/users/${id}`, {
      method: "DELETE",
      headers: AUTH_HEADER
    });
    const res = await fetch("http://localhost:8090/api/v1/users", { headers: AUTH_HEADER });
    setUsers(await res.json());
  };

  return (
    <>
      <div className="app-row">
        <UserList users={users} />
        <ProjectList projects={projects} />
      </div>
      <div className="form-row">
        <CreateUser addUser={addUser} />
        <AddProject onAdd={addProject} />
      </div>
      <div className="form-row">
        <DeleteUsers users={users} deleteUser={deleteUser} />
        <DeleteProjects projects={projects} onDelete={deleteProject} />
      </div>
    </>
  );
}

export default App;
