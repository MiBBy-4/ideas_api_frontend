import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutRequest } from '../apiRequests/CustomerRequests';

export default function IdeaNavbar(props) {
  const { customer } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((status) => status.isLoggedIn);

  async function handleLogoutClick() {
    const response = await logoutRequest();
    if (response.data.logged_out) {
      props.handleLogout();
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          { isLoggedIn ? (
            <Nav className="me-auto">
              <NavDropdown title="Ideas" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/ideas/">List of Ideas</NavDropdown.Item>
                <NavDropdown.Item href="/ideas/new">Create a new Idea</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (null)}
          { isLoggedIn ? (
            <Nav>
              <Nav.Link onClick={() => handleLogoutClick()}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/registration">Registration</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}