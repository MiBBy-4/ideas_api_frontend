import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getIdea, setReaction, updatePublicationPeriod } from '../apiRequests/IdeasRequests';
import { deleteIdea } from '../apiRequests/AdminRequests';
import { roles } from '../Roles';

export default function IdeaShow(props) {
  const navigate = useNavigate();
  const { ideaId } = useParams();
  const [idea, setIdea] = useState({});
  const { customer } = props;
  const DAYS_DIFF = 10;

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

  function comparingDates() {
    let date = new Date(idea.publication_period);
    let today = new Date();
    if (today <= date && today >= date.setDate(date.getDate() - DAYS_DIFF)) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <h1>
        {idea.name}
      </h1>
      <button type="submit" onClick={() => handleClick(true)}>Like</button>
      <button type="submit" onClick={() => handleClick(false)}>Dislike</button>
      { customer.role === roles('admin') || idea.customer_id === customer.id ? (
        <div>
          <button type="submit" onClick={() => handleUpdateButton()}>Update</button>
          <button type="submit" onClick={() => handleDeleteButton()}>Delete</button>
          { comparingDates() ? (
            <button type="submit" onClick={() => handleExtendButton()}>Extend</button>
          ) : (null)}
        </div>
      ) : (null)}
      <Link to="/ideas">Go back!</Link>
    </div>
  );
}
