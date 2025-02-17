import CustomNavbar from "../../Component/NavBar/NavBar";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Home({ onLogout }) {
  return (
    <>
      <div className="landing-page flex-grow-1">
        <CustomNavbar onLogout={onLogout} />

        {/* Welcome Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero-section bg-primary text-white text-center py-5">
      <Container>
        <h1 className="display-4 fw-bold">Welcome to Elite Connect</h1>
        <p className="lead">Your journey to success starts here.</p>
        <Button variant="light" size="lg" href="#features">
          Learn More
        </Button>
      </Container>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "🚀 Fast & Reliable",
      text: "Our platform is built for speed and reliability, ensuring you never miss a beat.",
    },
    {
      title: "💡 Easy to Use",
      text: "Designed with simplicity in mind, so you can focus on what matters most.",
    },
    {
      title: "🔒 Secure",
      text: "Your data is safe with us. We use the latest security protocols to protect you.",
    },
  ];

  return (
    <section id="features" className="features-section py-5">
      <Container>
        <h2 className="text-center mb-5">Features</h2>

        <Row>
          {features.map((feature, index) => (
            <Col md={4} key={index}>
              <Card className="text-center p-4 shadow-sm">
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-section bg-dark text-white text-center p-5 mt-auto">
      <Container>
        <p className="mb-0">&copy; 2025 Elite Connect. All rights reserved.</p>
      </Container>
    </footer>
  );
}
