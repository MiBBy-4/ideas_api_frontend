import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getIdea, setReaction } from '../apiRequests/IdeasRequests';

export default function IdeaShow() {
  const { ideaId } = useParams();
  const [idea, setIdea] = useState({});

  useEffect(async () => {
    const response = await getIdea(ideaId);
    setIdea(response.data);
  });

  async function handleClick(reaction) {
    const response = await setReaction(ideaId, reaction);
    console.log(response);
  }

  return (
    <div>
      <h1>
        {idea.name}
      </h1>
      <button type="submit" onClick={() => handleClick(true)}>Like</button>
      <button type="submit" onClick={() => handleClick(false)}>Dislike</button>
      <Link to="/ideas">Go back!</Link>
    </div>
  );
}
