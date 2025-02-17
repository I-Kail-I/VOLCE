import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/Image/Adiddas.png";
import { useNavigate } from "react-router-dom";

const CustomNavbar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <Navbar
      style={{ backgroundColor: "orange" }}
      expand="lg"
      className="shadow-sm"
    >
      <Container className="d-flex" style={{ gap: "20px" }}>
        <Navbar.Brand
          onClick={() => navigate("/")}
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <img
            src={Logo}
            width="100"
            height="auto"
            className="d-inline-block align-top rounded-circle me-2"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ gap: "30px", marginLeft: "20px" }}>
            <Nav.Link onClick={() => navigate("/")} className="active">
              Home
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="text-dark">
                More
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#about">About Us</Dropdown.Item>

                <Dropdown.Item href="#contact">Contact</Dropdown.Item>

                <Dropdown.Item href="#blog">Blog</Dropdown.Item>

                <Dropdown.Item href="#services">Services</Dropdown.Item>

                <Dropdown.Menu>
                  <Dropdown.Item href="#consulting">Consulting</Dropdown.Item>

                  <Dropdown.Item href="#support">Support</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <Form className="d-flex mx-3">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="me-2"
            />
            <Button variant="outline-light">Search</Button>
          </Form>

          <Nav>
            <Button className="btn-success" onClick={onLogout}>
              Log Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
