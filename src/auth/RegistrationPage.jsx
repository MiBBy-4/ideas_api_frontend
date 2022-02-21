import { useNavigate } from 'react-router';
import Registration from './Registration';

export default function RegistrationPage(props) {
  let navigate = useNavigate();

  function handleSuccessfulAuth(data) {
    props.handleLogin(data);
    navigate('/');
  }

  return (
    <div>
      <h1>Registration</h1>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}