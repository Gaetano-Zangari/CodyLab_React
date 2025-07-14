import { useState, useEffect } from "react";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const createProject = async (project) => {
    return await fetch("http://localhost:8090/api/v1/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    })
    .then(res => {
      if (res.ok) {
        return fetchUsers();
      }
    });
  };

  const fetchUsers = () => {
    fetch("http://localhost:8090/api/v1/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Fetch error:", err));
  };

  const createUser = async (newUser) => {
    return await fetch("http://localhost:8090/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
    .then(res => {
      if (res.ok) {
        return fetchUsers();
      }
    });
  };

  const removeUser = async (id) => {
    await fetch(`http://localhost:8090/api/v1/users/${id}`, { method: "DELETE" })
    fetchUsers();
  };

  return { users, createUser, removeUser };
}

