import { Link } from 'react-router-dom';
import IdeaForm from './IdeaForm';

export default function IdeaNew(props) {
  const { customer: { id } } = props;
  return (
    <div>
      <h1>Create new Idea</h1>
      <IdeaForm userId={id} />
      <Link to="/ideas">Go back</Link>
    </div>
  );
}
