import React, { useEffect, useState } from 'react';
import IdeaItem from './IdeaItem';
import IdeaForm from './IdeaForm';
import { getIdeas } from '../apiRequests/IdeasRequests';

function IdeaList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getIdeas(setItems);
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
      <IdeaForm updateIdeaList={updateIdeaList} />
      <ul>
        {items.map((item) => (
          <IdeaItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
export default IdeaList;
