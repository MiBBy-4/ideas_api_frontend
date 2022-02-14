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