import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import
{
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
} from 'react-bootstrap';
import
{
  getIdea,
  setReaction,
  updatePublicationPeriod,
  setResponse,
} from '../apiRequests/IdeasRequests';
import { deleteIdea } from '../apiRequests/AdminRequests';
import { roles } from '../Roles';
import { responsesCount } from './ResponsesCount';

export default function IdeaShow(props) {
  const navigate = useNavigate();
  const { ideaId } = useParams();
  const [idea, setIdea] = useState([]);
  const { customer } = props;
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const DAYS_DIFF = 10;

  useEffect(async () => {
    const response = await getIdea(ideaId);
    setIdea(response.data);
  });

  async function handleClick(reaction) {
    await setReaction(ideaId, reaction);
  }

  function handleUpdateButton() {
    navigate(`/ideas/${ideaId}/update`);
  }

  async function handleExtendButton() {
    await updatePublicationPeriod(ideaId);
  }

  async function handleDeleteButton() {
    navigate('/ideas');
    await deleteIdea(ideaId);
  }

  function comparingDates() {
    let date = new Date(idea.publication_period);
    let today = new Date();
    if (today <= date && today >= date.setDate(date.getDate() - DAYS_DIFF)) {
      return true;
    }
    return false;
  }

  async function handleInterestingButton() {
    await setResponse(ideaId);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Card className="mt-5" border="primary">
        <Card.Body>
          <Card.Title className="text-center">
            {idea.name}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {idea.description}
          </Card.Subtitle>
          <ListGroup className="list-group=flush">
            <ListGroupItem>
              <b>Problem: </b>
              {idea.problem}
            </ListGroupItem>
            <ListGroupItem>
              <b>Sphere: </b>
              {idea.sphere}
            </ListGroupItem>
            <ListGroupItem>
              <b>Geo Focus: </b>
              {idea.geo_focus}
            </ListGroupItem>
            <ListGroupItem>
              <b>List of team: </b>
              {idea.team}
            </ListGroupItem>
            <ListGroupItem>
              <b>About Future: </b>
              {idea.next_steps}
            </ListGroupItem>
            <ListGroupItem>
              <b>Investor Requirements: </b>
              {idea.investor_requirements}
            </ListGroupItem>
          </ListGroup>
          <Card.Body className="d-flex justify-content-center">
            <Button variant="success" type="submit" onClick={() => handleClick(true)}>Like</Button>
            <Button variant="danger" type="submit" onClick={() => handleClick(false)}>Dislike</Button>
            { customer.role === roles('investor') ? (
              <div>
                <Button variant="outline-success" onClick={() => handleInterestingButton()}>Interesting</Button>
              </div>
            ) : (null) }
            { customer.role === roles('admin') || idea.customer_id === customer.id ? (
              <div>
                <Button variant="info" type="submit" onClick={() => handleUpdateButton()}>Update</Button>
                <Button variant="danger" type="submit" onClick={handleShow}>Delete</Button>
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                  </Modal.Header>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={() => handleDeleteButton()}>Sure</Button>
                  </Modal.Footer>
                </Modal>
                { comparingDates() ? (
                  <Button variant="warning" type="submit" onClick={() => handleExtendButton()}>Extend</Button>
                ) : (null)}
              </div>
            ) : (null)}
          </Card.Body>
          <Card.Footer className="text-center">
            Views:
            {` ${idea.views} `}
            Responses:
            {idea.responses ? (responsesCount(idea.responses)) : (0)}
            { customer.id === idea.customer_id ? (
              <div>
                <Button size="sm" variant="light" onClick={() => setModalShow(true)}>Check responses</Button>
                <Modal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  size="lg"
                  centered
                >
                  <Modal.Header className="text-center">Investors</Modal.Header>
                  <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                      dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                      consectetur ac, vestibulum at eros.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            ) : (null) }
          </Card.Footer>
        </Card.Body>
      </Card>
      <Container className="d-flex justify-content-center mt-4">
        <Button variant="secondary" href="/ideas">Go back!</Button>
      </Container>
    </Container>
  );
}
