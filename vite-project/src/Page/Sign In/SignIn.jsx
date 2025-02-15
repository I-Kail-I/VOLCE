import { useState } from "react";

const server_data = () => {
  return [
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
};

export default function SignIn({ onLogin }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [accountname, setAccountname] = useState("");
  const [password, setPassword] = useState("");
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
      onLogin(user); // Call the onLogin prop with the user object
    } else {
      setError("Invalid username or password");
    }
  };

  return (
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
  );
}
