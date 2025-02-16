import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import SignIn from "../Sign In/SignIn";
import SignUp from "../Sign Up/SignUp";

export default function Auth() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null);
    navigate("/");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Routes>
        <Route
          path="/"
          element={
            loggedInUser ? (
              <Home onLogout={handleLogout} />
            ) : (
              <SignIn onLogin={(user) => setLoggedInUser(user)} />
            )
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
