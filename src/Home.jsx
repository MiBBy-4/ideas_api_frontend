import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import { logoutRequest } from './apiRequests/CustomerRequests';

export default function Home(props) {
  const { isLoggedIn } = props;
  async function handleLogoutClick() {
    const response = await logoutRequest();
    if (response.data.logged_out) {
      props.handleLogout();
    }
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10} className="text-center text-md-right">
          <Card>
            <Card.Header as="h5" className="text-center">Welcome</Card.Header>
            { isLoggedIn ? (
              <Card.Body>
                <Card.Title>You are logged in</Card.Title>
                <Card.Text>
                  So, now you can check list of ideas or create another one.
                </Card.Text>
                <Link className="btn btn-primary mx-2" to={'/ideas/'}>Check ideas</Link>
                <Link className="btn btn-success" to={'/ideas/new'}>Create an idea</Link>
              </Card.Body>
            ) : (
              <Card.Body>
                <Card.Title>You are not logged in</Card.Title>
                <Card.Text>
                  For use all functional of out service, you should be logged in.
                </Card.Text>
                <Link className="btn btn-primary mx-2" to={'/login'}>Login</Link>
                <Link className="btn btn-success" to={'/registration'}>Registration</Link>
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
