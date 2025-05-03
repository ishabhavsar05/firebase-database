import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, onLogout }) {
  const navStyle = {
    backgroundColor: "#333",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "15px",
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={{ ...linkStyle, fontSize: "24px" }}>MyApp</Link>
      </div>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        {user && <Link to="/dashboard" style={linkStyle}>Dashboard</Link>}
        {user && (
          <button
            onClick={onLogout}
            style={{
              padding: "8px 15px",
              backgroundColor: "#f44336",
              border: "none",
              borderRadius: "5px",
              color: "white",
              cursor: "pointer"
            }}
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
