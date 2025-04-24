import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div
      className="App"
      style={{
        background: 'linear-gradient(135deg, rgba(239, 8, 166, 0.15), rgba(0, 255, 255, 0.1))',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
