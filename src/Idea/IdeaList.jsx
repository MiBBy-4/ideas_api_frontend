import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IdeaItem from './IdeaItem';
import IdeaForm from './IdeaForm';
import { getIdeas } from '../apiRequests/IdeasRequests';

function IdeaList() {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const response = await getIdeas();
    setItems(response.data.reverse());
  });

  function updateIdeaList(item) {
    let updatedItems = items;
    updatedItems.unshift(item);
    setItems({
      items: updatedItems,
    });
  }

  return (
    <div>
      <Link to="/ideas/new">Create new Idea</Link>
      <ul>
        {items.map((item) => (
          <IdeaItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
export default IdeaList;
