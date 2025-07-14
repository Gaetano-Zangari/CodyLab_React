function DeleteUsers({ users, deleteUser }) {
  return (
    <div>
      <h2 className="form-title">Delete Users</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="card">
            <span>{user.firstName} {user.lastName}</span>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeleteUsers;
