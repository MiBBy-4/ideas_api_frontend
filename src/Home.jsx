import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from './auth/Login';
import Registration from './auth/Registration';

export default function Home(props) {
  let navigate = useNavigate();

  function handleSuccessfulAuth(data) {
    props.handleLogin(data);
    navigate('/dashboard');
  }

  function handleLogoutClick() {
    axios.delete(`${process.env.REACT_APP_API_URL}users/logout`, { withCredentials: true }).then((request) => {
      props.handleLogout();
    }).catch((error) => {
      console.log('logout error', error);
    });
  }

  return (
    <div>
      <h1>Home</h1>
      <h1>
        Status:
        {props.loggedInStatus}
      </h1>
      <button type="submit" onClick={() => handleLogoutClick()}>Logout</button>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}