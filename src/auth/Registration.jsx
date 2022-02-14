import React, { Component, useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { registrationRequest } from '../apiRequests/CustomerRequests';

export default function Registration(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: '',
  });

  function handleSubmit(event) {
    registrationRequest(state.email, state.password, state.password_confirmation, props.handleSuccessfulAuth);
    event.preventDefault();
  }

  function handleChange(event) {
    const { target: { value } } = event;
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} id="customer_form" autoComplete="off">
        <TextField id="email_input" label="Email" variant="outlined" type="text" name="email" onChange={handleChange} />
        <TextField id="password_input" label="Password" variant="outlined" type="password" name="password" onChange={handleChange} />
        <TextField id="password_confirmation_input" label="Password Confirmation" variant="outlined" type="password" name="password_confirmation" onChange={handleChange} />
        <Button variant="contained" color="primary" type="submit"> Register </Button>
      </form>
    </div>
  );
}
