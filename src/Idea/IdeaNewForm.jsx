import { Form, Button, Container } from 'react-bootstrap';
import { React, useState } from 'react';
import { useNavigate } from 'react-router';
import { postIdeas } from '../apiRequests/IdeasRequests';

function IdeaNewForm(props) {
  const { userId } = props;
  const [state, setState] = useState({
    name: '',
    description: '',
    problem: '',
    sphere: '',
    geo_focus: '',
    investor_requirements: '',
    team: '',
    next_steps: '',
  });
  const navigate = useNavigate();

  function handleIdeaChange(event) {
    const { target: { value, name } } = event;
    setState({
      ...state,
      [name]: value,
    });
  }

  async function formSubmit(formData) {
    const data = new FormData(formData);
    await postIdeas(data, userId);
    navigate('/ideas');
  }

  const handleSubmit = (event) => {
    formSubmit(event.target);
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name of my Idea" name="name" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description of my Idea" name="description" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Problem</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Problems that my Idea solves" name="problem" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sphere</Form.Label>
          <Form.Control type="text" placeholder="Sphere of my Idea" name="sphere" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Geo Focus</Form.Label>
          <Form.Control type="text" placeholder="Geo focus of my Idea" name="geo_focus" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Investor Requirements</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Requirements from the investor" name="investor_requirements" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Our team</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="List of our team" name="team" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Steps of out Idea</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="List of steps" name="next_steps" onChange={handleIdeaChange} />
        </Form.Group>
        <Button variant="success" type="submit">
          Create
        </Button>
      </Form>
    </Container>
  );
}

export default IdeaNewForm;
