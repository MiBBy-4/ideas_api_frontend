import { useNavigate, Link } from 'react-router-dom';
import Login from './auth/Login';
import Registration from './auth/Registration';
import { logoutRequest } from './apiRequests/CustomerRequests';

export default function Home(props) {
  let navigate = useNavigate();

  function handleSuccessfulAuth(data) {
    props.handleLogin(data);
    navigate('/dashboard');
  }

  async function handleLogoutClick() {
    const response = await logoutRequest();
    if (response.data.logged_out) {
      props.handleLogout();
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <Link to="/ideas">List of Ideas</Link>
      <button type="submit" onClick={() => handleLogoutClick()}>Logout</button>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}