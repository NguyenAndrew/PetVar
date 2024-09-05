import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App(): JSX.Element {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <br />
        <br />
        The health of the backend: {health ? health : "Backend is Offline"}
        <br />
        The message from Pocketbase: {pocketbaseMessage ? pocketbaseMessage : "N/A"}
      </header>
    </div>
  );
}

export default App;
