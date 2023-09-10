import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { getUsers } from "./api/users";

import TRUNK from "vanta/dist/vanta.trunk.min";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
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

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TRUNK({
          el: vantaRef.current, // Use the ref here
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff2b,
          backgroundColor: 0x0,
          spacing: 10.0,
          chaos: 10.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="app" ref={vantaRef}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Username: {user.username}, Password: {user.password}
          </li>
        ))}
      </ul>
      <div className="whoami-container">
        <a href="#" className="whoami">
          whoami
        </a>
      </div>
    </div>
  );
}

export default App;
