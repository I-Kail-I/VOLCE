import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.Component.css";

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

export default function SignIn({ onLogin }) {
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
      onLogin(user);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center bg-dark"
    >
      <Card
        className="rounded-1 shadow p-5 text-light"
        style={{ width: "800px", maxWidth: "90%", backgroundColor: "#141d2b" }}
      >
        <Row className="flex-nowrap">
          {/* Left Side: Login Form */}
          <Col md={6}>
            <div className="mb-4">
              <h2>Welcome Back!</h2>
              <p>
                Don&apos;t Have An Account? <Link to="/signup">Create Now</Link>
              </p>
            </div>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Your Username"
                  value={accountname}
                  autoComplete="off"
                  onChange={(e) => setAccountname(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Enter Your Password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {error && (
                <Form.Text className="text-danger mb-3">{error}</Form.Text>
              )}

              <Form.Group controlId="formBasicCheckbox" className="mb-4">
                <Form.Check
                  type="checkbox"
                  label={
                    <>
                      I agree to the <a href="#">Terms & Conditions</a>
                    </>
                  }
                />
              </Form.Group>

              <Button type="submit" variant="info" className="w-100">
                Submit
              </Button>
            </Form>

            {/* Social Login Options */}
            <div className="mt-4">
              <Row className="align-items-center">
                <Col>
                  <hr />
                </Col>
                <Col xs="auto">
                  <p className="mb-0">LOGIN WITH</p>
                </Col>
                <Col>
                  <hr />
                </Col>
              </Row>
              <Row className="justify-content-around">
                <Col xs="auto">
                  <Button variant="outline-light">GOOGLE</Button>
                </Col>
                <Col xs="auto">
                  <Button variant="outline-light">FACEBOOK</Button>
                </Col>
                <Col xs="auto">
                  <Button variant="outline-light">TWITTER</Button>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Right Side: Informational Panel */}
          <Col md={6} className="d-none d-md-flex">
            <div
              className="w-100 h-100 p-4 text-center text-light d-flex flex-column justify-content-center rounded"
              style={{ background: "#252532" }}
            >
              <h2>
                Make Your Journey To The Best <br /> And Make It Memorable
              </h2>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
