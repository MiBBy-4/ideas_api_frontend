import { useParams } from 'react-router';

export default function IdeaShow(props) {
  const { ideaId } = useParams();
  console.log(ideaId);
  return (
    <div>
      <h1>
        Idea Component
        { ideaId }
      </h1>
    </div>
  );
}
