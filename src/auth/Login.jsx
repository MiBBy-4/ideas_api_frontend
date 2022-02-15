import React, { Component, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { loginRequest } from '../apiRequests/CustomerRequests';

export default function Login(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    loginErrors: '',
  });

  async function formSubmit(event) {
    const response = await loginRequest(state.email, state.password);
    if (response.data.status === 'created') {
      props.handleSuccessfulAuth(response.data);
    }
  }

  function handleChange(event) {
    const { target: { value } } = event;
    const { target: { name } } = event;
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
    <div>
      <form onSubmit={handleSubmit} id="customer_form" autoComplete="off">
        <TextField id="email_input" label="Email" variant="outlined" type="text" name="email" onChange={handleChange} />
        <TextField id="password_input" label="Password" variant="outlined" type="password" name="password" onChange={handleChange} />
        <Button variant="contained" color="primary" type="submit"> Login </Button>
      </form>
    </div>
  );
}
