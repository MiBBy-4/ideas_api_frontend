import { Link } from 'react-router-dom';
import { logoutRequest } from './apiRequests/CustomerRequests';

export default function Home(props) {
  const { isLoggedIn } = props;
  async function handleLogoutClick() {
    const response = await logoutRequest();
    if (response.data.logged_out) {
      props.handleLogout();
    }
  }

  return (
    <div>
      <h1>Home</h1>
      { isLoggedIn ? (
        <div>
          <Link to="/ideas">List of Ideas</Link>
          <button type="submit" onClick={() => handleLogoutClick()}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>
        </div>
      )}
    </div>
  );
}
