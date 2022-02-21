import React, { Component, useState } from 'react';
import {
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
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
    if (response.data.status === 'created') {
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
    <div>
      <form onSubmit={handleSubmit} id="customer_form" autoComplete="off">
        <TextField id="email_input" label="Email" variant="outlined" type="text" name="email" onChange={handleChange} />
        <TextField id="password_input" label="Password" variant="outlined" type="password" name="password" onChange={handleChange} />
        <TextField id="password_confirmation_input" label="Password Confirmation" variant="outlined" type="password" name="password_confirmation" onChange={handleChange} />
        <InputLabel id="role">Role</InputLabel>
        <Select
          labelId="role"
          id="role"
          name="role"
          value={state.role}
          label="Role"
          onChange={handleChange}
        >
          <MenuItem value={0}>Businessman</MenuItem>
          <MenuItem value={1}>Investor</MenuItem>
        </Select>
        <Button variant="contained" color="primary" type="submit"> Register </Button>
      </form>
    </div>
  );
}
