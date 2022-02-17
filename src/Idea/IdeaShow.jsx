import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getIdea } from '../apiRequests/IdeasRequests';

export default function IdeaShow(props) {
  const { ideaId } = useParams();
  const [idea, setIdea] = useState();

  useEffect(async () => {
    const response = await getIdea(ideaId);
    setIdea(response.data);
  });

  return (
    <div>
      <h1>
        { idea.name }
      </h1>
      {idea.description}
      <br />
      {idea.problem}
      <br />
      {idea.sphere}
    </div>
  );
}
