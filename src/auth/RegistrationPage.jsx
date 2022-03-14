import { useNavigate } from 'react-router';
import Registration from './Registration';

export default function RegistrationPage(props) {
  const navigate = useNavigate();

  function handleSuccessfulAuth(data) {
    props.handleLogin(data);
    navigate('/');
  }

  return (
    <div>
      <h1 className="text-center">Registration</h1>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}