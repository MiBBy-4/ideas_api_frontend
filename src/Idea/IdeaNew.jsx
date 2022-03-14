import { useNavigate } from 'react-router';
import { Button, Container } from 'react-bootstrap';
import IdeaNewForm from './IdeaNewForm';

export default function IdeaNew(props) {
  const { customer: { id } } = props;
  const navigate = useNavigate();

  function handleHomeClick() {
    navigate('/');
  }

  return (
    <Container>
      <h1 className="text-center">Create new Idea</h1>
      <IdeaNewForm userId={id} />
      <Container className="d-flex justify-content-center mt-4">
        <Button variant="secondary" type="submit" onClick={() => handleHomeClick()}>
          Go Home
        </Button>
      </Container>
    </Container>
  );
}
