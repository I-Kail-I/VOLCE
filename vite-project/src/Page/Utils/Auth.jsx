import { useState } from "react";
import Home from "../Home/Home";
import SignIn from "../Sign In/SignIn";

export default function Auth() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div className="d-flex flex-column min-vh-100">
      {loggedInUser ? (
        <Home onLogout={() => setLoggedInUser(null)} />
      ) : (
        <SignIn onLogin={(user) => setLoggedInUser(user)} />
      )}
    </div>
  );
}
