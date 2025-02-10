import { useState } from "react";
import NavBar from "../Component/NavBar/NavBar";

// Registered User In Data Base
const server_data = () => {
  const user = [
    {
      user_id: 1,
      username: "Mikail",
      password: "Mikail123",
      role: "normal",
    },
    {
      user_id: 2,
      username: "Zahra",
      password: "Zahra123",
      role: "normal",
    },
    {
      user_id: 3,
      username: "Aflah",
      password: "Aflah123",
      role: "normal",
    },
    {
      user_id: 4,
      username: "Fatim",
      password: "Fatim123",
      role: "normal",
    },
    {
      user_id: 5,
      username: "Aurinka",
      password: "Aurinka123",
      role: "normal",
    },
    {
      user_id: 6,
      username: "Admin",
      password: "Admin123",
      role: "admin",
    },
  ];
  return user;
};

export default function SignIn() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [accountname, setAccountname] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const users = server_data();
    const user = users.find(
      (u) => u.username === accountname && u.password === password
    );

    if (user) {
      setLoggedInUser(user);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {loggedInUser ? (
        <div className="landing-page flex-grow-1">
          <NavBar />

          {/* Welcome Section */}
          <section className="hero-section bg-primary text-white text-center py-5">
            <div className="container">
              <h1 className="display-4 fw-bold">Welcome to Jerk Mate</h1>
              <p className="lead">Your journey to success starts here.</p>
              <a href="#features" className="btn btn-light btn-lg">
                Learn More
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="features-section py-5">
            <div className="container">
              <h2 className="text-center mb-5">Features</h2>
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="feature-card p-4 shadow-sm">
                    <h3>🚀 Fast & Reliable</h3>
                    <p>
                      Our platform is built for speed and reliability, ensuring
                      you never miss a beat.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="feature-card p-4 shadow-sm">
                    <h3>💡 Easy to Use</h3>
                    <p>
                      Designed with simplicity in mind, so you can focus on what
                      matters most.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="feature-card p-4 shadow-sm">
                    <h3>🔒 Secure</h3>
                    <p>
                      Your data is safe with us. We use the latest security
                      protocols to protect you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer-section bg-dark text-white text-center p-5 mt-auto">
            <div className="container">
              <p className="mb-0">
                &copy; 2025 Jerk Matez. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      ) : (
        // Login Page
        <div className="vh-100 d-flex align-items-center justify-content-center bg-dark">
          <div
            className="container rounded-1 shadow p-5 text-light"
            style={{
              width: "800px",
              maxWidth: "90%",
              backgroundColor: "#141d2b",
            }}
          >
            <div className="row flex-nowrap">
              <div className="col-md-6">
                <div className="title">
                  <h2 className="text-light">Welcome Back!</h2>
                  <p className="text-light">
                    Don&apos;t Have An Account? <a href=""> Create Now</a>{" "}
                  </p>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="inputUser d-flex flex-column">
                    <input
                      className="form-control p-2 mb-3"
                      type="text"
                      placeholder="Enter Your Username"
                      value={accountname}
                      onChange={(e) => setAccountname(e.target.value)}
                      required
                    />

                    <input
                      className="form-control p-2 mb-1"
                      type="password"
                      placeholder="Enter Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />

                    {error && <div className="text-danger mb-3">{error}</div>}

                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="remember_me"
                      />
                      <label className="form-check-label text-light">
                        {" "}
                        I agree to the <a href="#">Terms & Condition</a>{" "}
                      </label>
                    </div>

                    <button type="submit" className="btn btn-info w-100">
                      Submit
                    </button>
                  </div>
                </form>
                <div className="loginOption">
                  <div className="row">
                    <div className="col">
                      <hr />
                    </div>
                    <div className="col">
                      <p>LOGIN WITH</p>
                    </div>
                    <div className="col">
                      <hr />
                    </div>
                  </div>

                  <div
                    className="col justify-content-between d-flex"
                    style={{ marginLeft: "" }}
                  >
                    <button className="btn btn-outline-light">GOOGLE</button>
                    <button className="btn btn-outline-light">FACEBOOK</button>
                    <button className="btn btn-outline-light">TWITTER</button>
                  </div>
                </div>
              </div>

              {/**Right Side */}
              <div className="col-md-6 d-none d-md-flex">
                <div
                  className="w-100 h-100 p-4 text-center text-light position-relative d-flex flex-column justify-content-center rounded"
                  style={{ background: "#252532" }}
                >
                  <h2>
                    Make Your Journey To The Best <br /> And Make It Memorable
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
