import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { registrationRequest } from '../apiRequests/CustomerRequests';

export default function Registration(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: '',
    role: '',
  });

  async function formSubmit() {
    const response = await registrationRequest(state.email, state.password, state.password_confirmation, state.role);
    if (response.data.status === 201) {
      props.handleSuccessfulAuth(response.data);
    }
  }

  function handleChange(event) {
    const { target: { value, name } } = event;
    setState({
      ...state,
      [name]: value,
    });
  }

  const handleSubmit = (event) => {
    formSubmit();
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleChange} />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" name="password" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" name="password_confirmation" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Role</Form.Label>
          <Form.Select name="role" onChange={handleChange}>
            <option value={0}>Businessman</option>
            <option value={1}>Investor</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">Register</Button>
      </Form>
    </Container>
  );
}
