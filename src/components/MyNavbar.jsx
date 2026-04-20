import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>🍕 Pizzería Mamma Mia!</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link>🍕 Home</Nav.Link>

          {token ? (
            <>
              <Nav.Link>🔓 Profile</Nav.Link>
              <Nav.Link>🔒 Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link>🔐 Login</Nav.Link>
              <Nav.Link>🔐 Register</Nav.Link>
            </>
          )}
        </Nav>

        <Nav>
          <Nav.Link>🛒 Total: ${total.toLocaleString()}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;