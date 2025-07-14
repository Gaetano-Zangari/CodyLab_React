import React, { useState } from "react";

const AddProject = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(""); // non usato
  const [duration, setDuration] = useState(0);
  const [code, setCode] = useState("");
  const [state, setState] = useState("OPEN");
  const [manager, setManager] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim() || !description.trim()) return;
    setName("");
    setDescription("");
    setStartDate("");
    setDuration(0);
    setCode("");
    setState("OPEN");
    setManager("");
  };

  return (
    <form className="form-project" onSubmit={handleSubmit}>
      <h2 className="form-title">Create new project</h2>

      <label htmlFor="name">Project Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project name"
        required
      />

      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Project description"
        required
      />

      <label htmlFor="startDate">Start Date</label>
      <input
        id="startDate"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />

      <label htmlFor="duration">Duration</label>
      <input
        id="duration"
        type="number"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        required
      />

      <label htmlFor="code">Code</label>
      <input
        id="code"
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Project code"
        required
      />

      <label htmlFor="state">State</label>
      <select id="state" value={state} onChange={(e) => setState(e.target.value)}>
        <option value="OPEN">Active</option>
        <option value="CLOSE">Closed</option>
      </select>

   <label htmlFor="manager">Manager name</label>
<input
  id="manager"
  type="text"
  value={manager}
  onChange={(e) => setManager(e.target.value)}
  placeholder="Manager name"
/>


      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProject;
