import { Link } from 'react-router-dom';
import { logoutRequest } from './apiRequests/CustomerRequests';

export default function Home(props) {
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
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
      <button type="submit" onClick={() => handleLogoutClick()}>Logout</button>
    </div>
  );
}
