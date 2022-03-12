import { useState } from 'react';
import { Alert } from 'react-bootstrap';

export default function Errors(props) {
  const { errors } = props;
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh Snap! You got an error!</Alert.Heading>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </Alert>
    );
  }

  return null;
}