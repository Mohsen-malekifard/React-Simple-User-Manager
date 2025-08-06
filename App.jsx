import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import Greeting from "./Greeting";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.title = `تعداد کاربران: ${users.length}`;
  }, [users]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Login"}
      </button>

      <Greeting isLoggedIn={isLoggedIn} />

      {isLoggedIn && (
        <>
          <UserForm onAddUser={addUser} />
          <UserList users={users} />
        </>
      )}
    </div>
  );
}
