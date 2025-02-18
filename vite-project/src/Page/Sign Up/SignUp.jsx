import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.Component.css";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    username: false,
    password: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !value,
    }));
  };

  const isFormValid = () => {
    const newErrors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      username: !formData.username,
      password: !formData.password,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      navigate("/signIn");
    }
  };

  return (
    <>
      <div className="vh-100 bg-dark d-flex justify-content-center align-items-center">
        <Container
          className="text-light p-5 rounded-2"
          style={{
            width: "800px",
            maxWidth: "90%",
            backgroundColor: "#141d2b",
          }}
        >
          <Row>
            {/* Left Side */}
            <Col className="left-side">
              <Row className="h-100">
                <Card
                  className="w-100 h-100 p-4 text-center text-light d-flex flex-column justify-content-center rounded rounded-2"
                  style={{ background: "#252532" }}
                >
                  <h2>Welcome to Our Community</h2>
                  <p>
                    Join us today and be a part of an exclusive network of
                    professionals. Sign up now to start your journey with us.
                  </p>
                </Card>
              </Row>
            </Col>

            {/* Right Side */}
            <Col>
              <Row>
                <Row>
                  <h2>Registered Now!</h2>
                  <p>
                    Already have an <Link to="/">Account</Link>?
                  </p>
                </Row>

                <Form onSubmit={handleSubmit}>
                  <Row className="d-flex align-items-center justify-content-center">
                    <Row>
                      <Col>
                        <FormGroup>
                          <FormLabel>First Name</FormLabel>
                          <FormControl
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                          {errors.firstName && (
                            <div className="text-danger">
                              Enter Your First Name
                            </div>
                          )}
                        </FormGroup>
                      </Col>

                      <Col>
                        <FormGroup>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                          {errors.lastName && (
                            <div className="text-danger">
                              Enter Your Last Name
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>

                    <FormGroup className="mt-2" style={{ width: "340px" }}>
                      <FormLabel>Username</FormLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter Your Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                      {errors.username && (
                        <div className="text-danger">Enter Your Username </div>
                      )}
                    </FormGroup>

                    <FormGroup className="mt-2" style={{ width: "340px" }}>
                      <FormLabel>Password</FormLabel>
                      <FormControl
                        type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        minLength={5}
                      />
                      {errors.password && (
                        <div className="text-danger">Enter Your Password </div>
                      )}
                    </FormGroup>

                    <Row className="justify-content-center">
                      <Button
                        type="submit"
                        variant="info"
                        className="mt-3"
                        style={{ width: "150px" }}
                      >
                        Submit
                      </Button>
                    </Row>
                  </Row>
                </Form>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
