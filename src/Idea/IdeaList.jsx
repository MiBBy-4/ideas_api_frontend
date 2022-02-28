import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import IdeaItem from './IdeaItem';
import { getIdeas } from '../apiRequests/IdeasRequests';

function IdeaList() {
  const [items, setItems] = useState([]);
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      identity: true,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 130,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 130,
    },
    {
      field: 'problem',
      headerName: 'Problem',
      width: 130,
    },
  ];

  useEffect(async () => {
    const response = await getIdeas();
    setItems(response.data.reverse());
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={items}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.id}
      />
    </div>
  );
}
export default IdeaList;
