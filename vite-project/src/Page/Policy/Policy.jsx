import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Policy.Component.css";

export default function Policy() {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <Card>
            <Card.Header as="h1">Privacy Policy</Card.Header>
            <Card.Body>
              <Card.Text>
                <h2>Introduction</h2>

                <p>
                  Welcome to our Privacy Policy page. When you use our web site
                  services, you trust us with your information. This Privacy
                  Policy is meant to help you understand what data we collect,
                  why we collect it, and what we do with it. This is important;
                  we hope you will take time to read it carefully.
                </p>

                <h2>Information Collection</h2>

                <p>
                  We collect information to provide better services to all our
                  users.
                </p>

                <h2>Information Use</h2>

                <p>
                  We use the information we collect from all of our services for
                  the following purposes:
                </p>

                <ul>
                  <li>Provide our services</li>
                  <li>Maintain & improve our services</li>
                  <li>Develop new services</li>
                  <li>Provide personalized services</li>
                  <li>Measure performance</li>
                </ul>
              </Card.Text>

              <Button onClick={() => navigate("/signIn")}>Return</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
