import CustomNavbar from "../../Component/NavBar/NavBar";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Home({ onLogout }) {
  return (
    <>
      <div className="landing-page flex-grow-1">
        <CustomNavbar onLogout={onLogout} />

        {/* Welcome Section */}
        <section className="hero-section bg-primary text-white text-center py-5">
          <Container>
            <h1 className="display-4 fw-bold">Welcome to Jerk Mate</h1>
            <p className="lead">Your journey to success starts here.</p>
            <Button variant="light" size="lg" href="#features">
              Learn More
            </Button>
          </Container>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section py-5">
          <Container>
            <h2 className="text-center mb-5">Features</h2>

            <Row>
              <Col md={4}>
                <Card className="text-center p-4 shadow-sm">
                  <Card.Body>
                    <Card.Title>🚀 Fast & Reliable</Card.Title>
                    <Card.Text>
                      Our platform is built for speed and reliability, ensuring
                      you never miss a beat.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="text-center p-4 shadow-sm">
                  <Card.Body>
                    <Card.Title>💡 Easy to Use</Card.Title>
                    <Card.Text>
                      Designed with simplicity in mind, so you can focus on what
                      matters most.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="text-center p-4 shadow-sm">
                  <Card.Body>
                    <Card.Title>🔒 Secure</Card.Title>
                    <Card.Text>
                      Your data is safe with us. We use the latest security
                      protocols to protect you.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer */}
        <footer className="footer-section bg-dark text-white text-center p-5 mt-auto">
          <Container>
            <p className="mb-0">&copy; 2025 Jerk Matez. All rights reserved.</p>
          </Container>
        </footer>
      </div>
    </>
  );
}
