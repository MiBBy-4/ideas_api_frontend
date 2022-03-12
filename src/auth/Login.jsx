import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { loginRequest } from '../apiRequests/CustomerRequests';
import Errors from '../Errors';

export default function Login(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [error, setErrors] = useState([]);
  async function formSubmit(event) {
    const response = await loginRequest(state.email, state.password);
    const { data: { status, errors } } = response;
    if (status === 201) {
      props.handleSuccessfulAuth(response.data);
    } else {
      setErrors([errors]);
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
      { error.length !== 0 ? (
        <Errors errors={error} />
      ) : (null) }
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" name="password" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Container>
  );
}
