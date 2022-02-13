import React, { Component, useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

export default function Registration(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [registrationErrors, setErrors] = useState('');

  function handleSubmit(event) {
    axios.post(`${process.env.REACT_APP_API_URL}users/registrations`, {
      customer: {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      },
    }, { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        props.handleSuccessfulAuth(response.data);
      }
    }).catch((error) => {
      console.log('registration error', error);
    });
    event.preventDefault();
  }

  function handleChange(event) {
    const { target: { value } } = event;
    setEmail(value);
    setPassword(value);
    setPasswordConfirmation(value);
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
