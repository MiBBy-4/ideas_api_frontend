import React, { useEffect, useState } from 'react';
import IdeaItem from './IdeaItem';
import IdeaForm from './IdeaForm';

const apiURL = 'http://localhost:3000/api/v1/ideas';

function IdeaList() {
  const [items, setItems] = useState([]);

  function getIdeas() {
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseItems) => {
        setItems(responseItems.reverse());
      });
  }

  useEffect(() => {
    getIdeas();
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
      <IdeaForm apiURL={apiURL} updateIdeaList={updateIdeaList} />
      <ul>
        {items.map((item) => (
          <IdeaItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
export default IdeaList;
