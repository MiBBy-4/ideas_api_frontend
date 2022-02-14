import React, { Component, useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { loginRequest } from '../apiRequests/CustomerRequests';

export default function Login(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    loginErrors: '',
  });

  function handleSubmit(event) {
    console.log(state.email);
    loginRequest(state.email, state.password, props.handleSuccessfulAuth);
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
        <Button variant="contained" color="primary" type="submit"> Login </Button>
      </form>
    </div>
  );
}
