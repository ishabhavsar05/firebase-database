import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { auth, googleProvider } from "./services/firebase";  // Import correct Firebase functions
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth"; // Import Firebase functions

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Correct way to use onAuthStateChanged in Firebase v9+
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)  // Correct method for Google Sign-In
      .then((result) => {
        console.log("User signed in:", result.user);
      })
      .catch((error) => {
        console.error("Error during sign in:", error);
      });
  };

  const handleLogout = () => {
    signOut(auth); // Correct method to sign out
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home onLogin={handleLogin} />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
