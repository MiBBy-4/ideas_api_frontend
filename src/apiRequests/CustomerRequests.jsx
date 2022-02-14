import axios from 'axios';

export function loginRequest(email, password, handleSuccessfulAuth) {
  axios.post(`${process.env.REACT_APP_API_URL}users/sessions`, {
    customer: {
      email: email,
      password: password,
    },
  }, { withCredentials: true }).then((response) => {
    if (response.data.status === 'created') {
      handleSuccessfulAuth(response.data);
    }
  }).catch((error) => {
    console.log('login error', error);
  });
}

export function registrationRequest(email, password, password_confirmation, handleSuccessfulAuth) {
  axios.post(`${process.env.REACT_APP_API_URL}users/registrations`, {
    customer: {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    },
  }, { withCredentials: true }).then((response) => {
    if (response.data.status === 'created') {
      handleSuccessfulAuth(response.data);
    }
  }).catch((error) => {
    console.log('registration error', error);
  });
}

export function logoutRequest(handleLogout) {
  axios.delete(`${process.env.REACT_APP_API_URL}users/logout`, { withCredentials: true }).then((request) => {
    handleLogout();
  }).catch((error) => {
    console.log('logout error', error);
  });
}