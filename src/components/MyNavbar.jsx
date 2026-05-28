import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const MyNavbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>🍕 Pizzería Mamma Mia!</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            🍕 Home
          </Nav.Link>
          {token ? (
            <>
              <Nav.Link as={Link} to="/profile">
                🔓 Profile
              </Nav.Link>

              <Nav.Link onClick={logout}>🔒 Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                🔐 Login
              </Nav.Link>

              <Nav.Link as={Link} to="/register">
                🔐 Register
              </Nav.Link>
            </>
          )}
        </Nav>

        <Nav>
          <Nav.Link as={Link} to="/cart">
            🛒 Total: ${total.toLocaleString()}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
