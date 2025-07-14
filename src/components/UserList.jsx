function UserList({ users }) {
  return (
    <div>
      <h2 className="form-title">User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="card">
            <h3>{user.first_name} {user.last_name}</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
