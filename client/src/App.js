import { useEffect, useState } from "react";
import "./App.css";
import { getUsers } from "./api/users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Username: {user.username}, Password: {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
