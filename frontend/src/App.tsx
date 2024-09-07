import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [health, setHealth] = useState("");
  const [pocketbaseMessage, setPocketbaseMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("./health");
      setHealth(result.data);

      const pocketbaseResult = await axios.get("./pocketbase-message");
      setPocketbaseMessage(pocketbaseResult.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <p>
          The health of the backend: {health ? health : "Backend is Offline"}
        </p>
        <p>
          The message from Pocketbase: {pocketbaseMessage ? pocketbaseMessage : "N/A"}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
