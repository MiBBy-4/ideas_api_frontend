import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { getIdea } from '../apiRequests/IdeasRequests';
import IdeaUpdateForm from './IdeaUpdateForm';

export default function IdeaUpdate() {
  const { ideaId } = useParams();
  const [idea, setIdea] = useState({});
  const navigate = useNavigate();

  useEffect(async () => {
    const response = await getIdea(ideaId);
    setIdea(response.data);
  });

  function handleHomeClick() {
    navigate('/');
  }
  return (
    <Container>
      <h1 className="text-center">
        Update
        { ' ' }
        { idea.name }
      </h1>
      <IdeaUpdateForm idea={idea} />
      <Container className="d-flex justify-content-center mt-4">
        <Button variant="secondary" type="submit" onClick={() => handleHomeClick()}>
          Go Home
        </Button>
      </Container>
    </Container>
  );
}
