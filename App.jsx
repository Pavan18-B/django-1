import React from "react";
import Library from "./components/Library";

function App() {
  return (
    <div>
      <header style={{ background: "#0078d7", color: "white", padding: "15px", textAlign: "center" }}>
        <h1>📚 College Library Management System</h1>
      </header>
      <Library />
      <footer style={{ background: "#0078d7", color: "white", textAlign: "center", padding: "10px", marginTop: "20px" }}>
        <p>© 2026 College Library | Designed by Pavan</p>
      </footer>
    </div>
  );
}

export default App;
