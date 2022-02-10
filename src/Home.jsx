import { useNavigate } from 'react-router-dom';
import Login from './auth/Login';
import Registration from './auth/Registration';

export default function Home(props) {
  let navigate = useNavigate();

  function handleSuccessfulAuth(data) {
    props.handleLogin(data);
    navigate('/dashboard');
  }
  console.log(props.loggedInStatus);
  return (
    <div>
      <h1>Home</h1>
      <h1>
        Status:
        {props.loggedInStatus}
      </h1>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}