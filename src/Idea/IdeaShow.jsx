import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getIdea, setReaction } from '../apiRequests/IdeasRequests';
import { deleteIdea } from '../apiRequests/AdminRequests';

export default function IdeaShow(props) {
  const navigate = useNavigate();
  const { ideaId } = useParams();
  const [idea, setIdea] = useState({});
  const { customer } = props;
  useEffect(async () => {
    const response = await getIdea(ideaId);
    setIdea(response.data);
  });

  async function handleClick(reaction) {
    const response = await setReaction(ideaId, reaction);
  }

  function handleUpdateButton() {
    navigate(`/ideas/${ideaId}/update`);
  }

  async function handleDeleteButton() {
    await deleteIdea(idea.id);
    navigate('/ideas');
  }

  return (
    <div>
      <h1>
        {idea.name}
      </h1>
      <button type="submit" onClick={() => handleClick(true)}>Like</button>
      <button type="submit" onClick={() => handleClick(false)}>Dislike</button>
      { customer.role === 3 ? (
        <div>
          <button type="submit" onClick={() => handleUpdateButton()}>update</button>
          <button type="submit" onClick={() => handleDeleteButton()}>delete</button>
        </div>
      ) : (null)}
      <Link to="/ideas">Go back!</Link>
    </div>
  );
}
