import React from "react";

function Home({ onLogin }) {
  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>Welcome to MyApp</h1>
      <p>Sign in to access your dashboard.</p>
      <button
        onClick={onLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          border: "none",
          color: "white",
          fontSize: "16px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Home;
