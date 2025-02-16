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
                  <h2>
                    Ready for your JerkMate competation?!
                    <br />
                    say no more
                    <br />
                    and jump to the grandmastorbaitor
                  </h2>
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

                <Form>
                  <Row className="d-flex align-items-center justify-content-center">
                    <Row>
                      <Col>
                        <FormGroup>
                          <FormLabel>First Name</FormLabel>
                          <FormControl type="text" required />
                        </FormGroup>
                      </Col>

                      <Col>
                        <FormGroup>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl type="text" required />
                        </FormGroup>
                      </Col>
                    </Row>

                    <FormGroup className="mt-2" style={{ width: "340px" }}>
                      <FormLabel>Username</FormLabel>
                      <FormControl type="text" required />
                    </FormGroup>

                    <FormGroup className="mt-2" style={{ width: "340px" }}>
                      <FormLabel>Password</FormLabel>
                      <FormControl type="password" minLength={5} required />
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
