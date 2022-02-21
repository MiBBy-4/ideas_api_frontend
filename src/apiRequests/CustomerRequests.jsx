import axios from 'axios';

export function loginRequest(email, password) {
  return axios.post(`${process.env.REACT_APP_API_URL}users/sessions`, {
    customer: {
      email: email,
      password: password,
    },
  }, { withCredentials: true });
}

export function registrationRequest(email, password, password_confirmation, role) {
  return axios.post(`${process.env.REACT_APP_API_URL}users/registrations`, {
    customer: {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      role: role,
    },
  }, { withCredentials: true });
}

export function logoutRequest() {
  return axios.delete(`${process.env.REACT_APP_API_URL}users/logout`, { withCredentials: true });
}

export function sessionRequest() {
  return axios.get(`${process.env.REACT_APP_API_URL}users/logged_in`, { withCredentials: true });
}