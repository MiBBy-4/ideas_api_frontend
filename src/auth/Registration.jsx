import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { registrationRequest } from '../apiRequests/CustomerRequests';
import Errors from '../Errors';

export default function Registration(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    name: '',
    surname: '',
    phone_number: '',
    skype: '',
    role: '',
  });
  const [error, setErrors] = useState([]);

  async function formSubmit() {
    const response = await registrationRequest(
      state.email,
      state.password,
      state.password_confirmation,
      state.role,
      state.name,
      state.surname,
      state.skype,
    );
    const { data: { status, errors } } = response;
    if (status === 201) {
      props.handleSuccessfulAuth(response.data);
    } else {
      setErrors(errors);
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
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" name="name" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Surname</Form.Label>
          <Form.Control type="text" placeholder="Enter your surname" name="surname" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Skype</Form.Label>
          <Form.Control type="text" placeholder="Enter your skype login" name="skype" onChange={handleChange} />
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
