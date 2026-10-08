import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Welcome to my CI Demo Project!");

  return (
    <div className="container">
      <div className="card">
        <h1>🚀 CI Demo Project</h1>

        <p>
          This is a simple React frontend created for practicing
          Continuous Integration.
        </p>

        <div className="status">
          <span className="dot"></span>
          CI Pipeline Ready
        </div>

        <button onClick={() => setMessage("CI is working successfully! 🎉")}>
          Test Application
        </button>

        <p className="message">{message}</p>

        <div className="info">
          <p><strong>Frontend:</strong> React</p>
          <p><strong>Version Control:</strong> Git & GitHub</p>
          <p><strong>CI:</strong> GitHub Actions</p>
        </div>
      </div>
    </div>
  );
}

export default App;