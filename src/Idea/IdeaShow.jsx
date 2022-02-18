import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getIdea } from '../apiRequests/IdeasRequests';

export default function IdeaShow() {
  const { ideaId } = useParams();
  const [idea, setIdea] = useState({});

  useEffect(async () => {
    const response = await getIdea(ideaId);
    setIdea(response.data);
  });

  return (
    <div>
      <h1>
        {idea.name}
      </h1>
      <Link to="/ideas">Go back!</Link>
    </div>
  );
}
