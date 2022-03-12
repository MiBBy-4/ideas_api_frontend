import { Form, Button, Container } from 'react-bootstrap';
import { React, useState } from 'react';
import { useNavigate } from 'react-router';
import { updateIdea } from '../apiRequests/AdminRequests';
import Errors from '../Errors';

export default function IdeaUpdateForm(props) {
  const { idea } = props;
  const [state, setState] = useState({
    name: idea.name,
    description: idea.description,
    problem: idea.problem,
    sphere: idea.sphere,
    geo_focus: idea.geo_focus,
    investor_requirements: idea.investor_requirements,
    next_steps: idea.next_steps,
    team: idea.team,
  });
  const [error, setErrors] = useState([]);

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
    const { id } = idea;
    const response = await updateIdea(id, data);
    const { data: { status, errors } } = response;
    if (status === 200) {
      navigate('/ideas');
    } else {
      setErrors(errors);
    }
  }

  const handleSubmit = (event) => {
    formSubmit(event.target);
    event.preventDefault();
  };

  return (
    <Container>
      { error.length !== 0 ? (
        <Errors errors={error} />
      ) : (null) }
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={state.name} placeholder="Name of my Idea" name="name" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={state.description} placeholder="Description of my Idea" name="description" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Problem</Form.Label>
          <Form.Control as="textarea" rows={3} value={state.problem} placeholder="Problems that my Idea solves" name="problem" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sphere</Form.Label>
          <Form.Control type="text" value={state.sphere} placeholder="Sphere of my Idea" name="sphere" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Geo Focus</Form.Label>
          <Form.Control type="text" value={state.geo_focus} placeholder="Geo focus of my Idea" name="geo_focus" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Investor Requirements</Form.Label>
          <Form.Control as="textarea" rows={3} value={state.investor_requirements} placeholder="Requirements from the investor" name="investor_requirements" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Our team</Form.Label>
          <Form.Control as="textarea" rows={3} value={state.team} placeholder="List of our team" name="team" onChange={handleIdeaChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Steps of out Idea</Form.Label>
          <Form.Control as="textarea" value={state.next_steps} rows={3} placeholder="List of steps" name="next_steps" onChange={handleIdeaChange} />
        </Form.Group>
        <Button variant="success" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
}
