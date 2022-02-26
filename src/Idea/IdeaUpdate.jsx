import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getIdea } from '../apiRequests/IdeasRequests';
import IdeaUpdateForm from './IdeaUpdateForm';

export default function IdeaUpdate() {
  const { ideaId } = useParams();
  const [idea, setIdea] = useState({});

  useEffect(async () => {
    const response = await getIdea(ideaId);
    setIdea(response.data);
  });

  return (
    <div>
      <h1>
        Update
        { idea.name }
      </h1>
      <IdeaUpdateForm idea={idea} />
      <Link to="/ideas">Go back</Link>
    </div>
  );
}
