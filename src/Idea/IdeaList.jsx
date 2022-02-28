import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import IdeaItem from './IdeaItem';
import { getIdeas } from '../apiRequests/IdeasRequests';

function IdeaList() {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const response = await getIdeas();
    setItems(response.data.reverse());
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
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
