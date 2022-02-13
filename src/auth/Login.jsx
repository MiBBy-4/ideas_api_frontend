import React, { Component, useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setErrors] = useState('');

  function handleSubmit(event) {
    axios.post(`${process.env.REACT_APP_API_URL}users/sessions`, {
      customer: {
        email: email,
        password: password,
      },
    }, { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        props.handleSuccessfulAuth(response.data);
      }
    }).catch((error) => {
      console.log('login error', error);
    });
    event.preventDefault();
  }

  function handleChange(event) {
    const { target: { value } } = event;
    setEmail(value);
    setPassword(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} id="customer_form" autoComplete="off">
        <TextField id="email_input" label="Email" variant="outlined" type="text" name="email" onChange={handleChange} />
        <TextField id="password_input" label="Password" variant="outlined" type="password" name="=password" onChange={handleChange} />
        <Button variant="contained" color="primary" type="submit"> Login </Button>
      </form>
    </div>
  );
}
