import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getIdea, setReaction, updatePublicationPeriod } from '../apiRequests/IdeasRequests';
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
    await setReaction(ideaId, reaction);
  }

  function handleUpdateButton() {
    navigate(`/ideas/${ideaId}/update`);
  }

  async function handleExtendButton() {
    await updatePublicationPeriod(ideaId);
  }

  async function handleDeleteButton() {
    await deleteIdea(ideaId);
    navigate('/ideas');
  }
  return (
    <div>
      <h1>
        {idea.name}
      </h1>
      <button type="submit" onClick={() => handleClick(true)}>Like</button>
      <button type="submit" onClick={() => handleClick(false)}>Dislike</button>
      { customer.role === 3 || idea.customer_id === customer.id ? (
        <div>
          <button type="submit" onClick={() => handleUpdateButton()}>update</button>
          <button type="submit" onClick={() => handleDeleteButton()}>delete</button>
          <button type="submit" onClick={() => handleExtendButton()}>Extend</button>
        </div>
      ) : (null)}
      <Link to="/ideas">Go back!</Link>
    </div>
  );
}
