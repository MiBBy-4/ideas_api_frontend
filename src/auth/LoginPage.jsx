import { useNavigate } from 'react-router';
import Login from './Login';

export default function LoginPage(props) {
  const navigate = useNavigate();

  function handleSuccessfulAuth(data) {
    navigate('/');
    props.handleLogin(data);
  }

  return (
    <div>
      <h1>Login</h1>
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}