import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getIdeas, changeNumberOfViews } from '../apiRequests/IdeasRequests';

function IdeaList() {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const response = await getIdeas();
    setItems(response.data.reverse());
  });

  async function handleClick(idea) {
    await changeNumberOfViews(idea);
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Problem</TableCell>
              <TableCell align="right">Sphere</TableCell>
              <TableCell align="right">Geo focus</TableCell>
              <TableCell align="right">Views</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{item.id}</TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.problem}</TableCell>
                <TableCell align="right">{item.sphere}</TableCell>
                <TableCell align="right">{item.geo_focus}</TableCell>
                <TableCell align="right">{item.views}</TableCell>
                <TableCell align="right"><Link to={`/ideas/${item.id}`} onClick={() => handleClick(item)}>View</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default IdeaList;
