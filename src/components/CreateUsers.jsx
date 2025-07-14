import { useState } from 'react';

function CreateUser({ addUser }) {
  const [form, setForm] = useState({ 
    firstName: "", 
    lastName: "", 
    email: "", 
    username: "", 
    profile: "", 
    dailyHours: 1 
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "dailyHours" ? parseFloat(value) || 0 : value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitting:", form); // controlla il valore prima di inviare
    addUser(form);
    setForm({ 
      firstName: "", 
      lastName: "", 
      email: "", 
      username: "", 
      profile: "", 
      dailyHours: 1 
    });
  };

  return (
    <form className="form-user" onSubmit={handleSubmit}>
      <h2 className="form-title">Create new user</h2>
      <div className="field">
        <label>First Name:</label>
        <input name="firstName" value={form.firstName} onChange={handleChange} />
      </div>
      <div className="field">
        <label>Last Name:</label>
        <input name="lastName" value={form.lastName} onChange={handleChange} />
      </div>
      <div className="field">
        <label>Email:</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} />
      </div>
      <div className="field">
        <label>Profile:</label>
        <input name="profile" value={form.profile} onChange={handleChange} />
      </div>
      <div className="field">
        <label>Username:</label>
        <input name="username" value={form.username} onChange={handleChange} />
      </div>
      <div className="field">
        <label>DailyHours:</label>
        <input name="dailyHours" type="number" value={form.dailyHours} onChange={handleChange} />
      </div>
      <button type="submit">Create user</button>
    </form>
  );
}

export default CreateUser;
