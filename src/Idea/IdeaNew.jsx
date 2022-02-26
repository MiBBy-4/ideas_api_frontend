import { Link } from 'react-router-dom';
import IdeaNewForm from './IdeaNewForm';

export default function IdeaNew(props) {
  const { customer: { id } } = props;
  return (
    <div>
      <h1>Create new Idea</h1>
      <IdeaNewForm userId={id} />
      <Link to="/ideas">Go back</Link>
    </div>
  );
}
