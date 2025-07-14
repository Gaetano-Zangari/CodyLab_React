import React, { useState } from "react";

const AddProject = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    startDate: "",
    duration: 0,
    code: "",
    state: "OPEN",
    manager: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "duration" ? Number(value) : value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.description.trim()) return;
    onAdd(form);
    setForm({
      name: "",
      description: "",
      startDate: "",
      duration: 0,
      code: "",
      state: "OPEN",
      manager: ""
    });
  };

  return (
    <form className="form-project" onSubmit={handleSubmit}>
      <h2 className="form-title">Create new project</h2>

      <div className="field">
        <label>Project Name:</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label>Description:</label>
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label>Start Date:</label>
        <input
          name="startDate"
          type="date"
          value={form.startDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label>Duration (days):</label>
        <input
          name="duration"
          type="number"
          value={form.duration}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label>Project Code:</label>
        <input
          name="code"
          value={form.code}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label>State:</label>
        <select
          name="state"
          value={form.state}
          onChange={handleChange}
        >
          <option value="OPEN">Active</option>
          <option value="CLOSE">Closed</option>
        </select>
      </div>

      <div className="field">
        <label>Manager Username:</label>
        <input
          name="manager"
          value={form.manager}
          onChange={handleChange}
          placeholder="Manager username"
        />
      </div>

      <button type="submit">Create Project</button>
    </form>
  );
};

export default AddProject;
