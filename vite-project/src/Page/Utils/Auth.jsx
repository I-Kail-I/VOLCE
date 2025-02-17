import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import SignIn from "../Sign In/SignIn";
import SignUp from "../Sign Up/SignUp";
import Policy from "../Policy/Policy";

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
        {/* Route for Sign In to Home */}
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

        {/* Route for Sign In and Sign Up link */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Route for the Button of the Sign Up to the Sign In */}
        <Route path="/signIn" element={<SignIn />} />

        {/* Routing for the Sign In terms and condition to the Policy page */}
        <Route path="Policy" element={<Policy />} />
      </Routes>
    </div>
  );
}
