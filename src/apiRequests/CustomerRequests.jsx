import axios from 'axios';

export function loginRequest(props) {
  return axios.post(`${process.env.REACT_APP_API_URL}users/sessions`, {
    customer: {
      email: props.email,
      password: props.password,
    },
  }, { withCredentials: true });
}

export function registrationRequest(props) {
  return axios.post(`${process.env.REACT_APP_API_URL}users/registrations`, {
    customer: {
      email: props.email,
      password: props.password,
      password_confirmation: props.password_confirmation,
    },
  }, { withCredentials: true });
}

export function logoutRequest() {
  return axios.delete(`${process.env.REACT_APP_API_URL}users/logout`, { withCredentials: true });
}

export function sessionRequest() {
  return axios.get(`${process.env.REACT_APP_API_URL}users/logged_in`, { withCredentials: true });
}