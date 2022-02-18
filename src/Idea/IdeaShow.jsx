import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getIdea } from '../apiRequests/IdeasRequests';

export default function IdeaShow() {
  const { ideaId } = useParams();
  const [idea, setIdea] = useState();

  useEffect(async () => {
    const response = await getIdea(ideaId);
    setIdea(response.data);
  });

  console.log(idea.customer);

  return (
    <div>
      <h1>
        {/* {idea.name} */}
        Test
      </h1>
      {/* {item.description}
      <br />
      {item.problem}
      <br />
      {item.sphere} */}
    </div>
  );
}
