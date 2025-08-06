export default function UserList({ users }) {
  return (
    <div>
      <h3>لیست کاربران:</h3>
      {users.map((user, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{user.name}</strong> - {user.email}
        </div>
      ))}
    </div>
  );
}
