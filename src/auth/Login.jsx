import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loginErrors: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    axios.post(`${process.env.REACT_APP_API_URL}users/sign_in`, {
      user: {
        email: this.state.email,
        password: this.state.password,
      },
    }, { withCredentials: false }).then((response) => {
      if (response.data.message === 'You are logged in.') {
        this.props.handleSuccessfulAuth(response.data);
      }
    }).catch((error) => {
      console.log('login error', error);
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}