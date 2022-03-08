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
import {
  likesCount,
  dislikesCount,
  avgLikes,
  avgDislikes,
} from './ReactionsCount';

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
              <TableCell align="right">Team</TableCell>
              <TableCell align="right">Steps</TableCell>
              <TableCell align="right">Views</TableCell>
              <TableCell align="right">Likes</TableCell>
              <TableCell align="right">Dislikes</TableCell>
              <TableCell align="right">AVG Likes</TableCell>
              <TableCell align="right">AVG Dislikes</TableCell>
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
                <TableCell align="right">{item.description.length > 25 ? (`${item.description.substring(0, 24)}...`) : (item.description)}</TableCell>
                <TableCell align="right">{item.problem.length > 25 ? (`${item.problem.substring(0, 24)}...`) : (item.problem)}</TableCell>
                <TableCell align="right">{item.sphere}</TableCell>
                <TableCell align="right">{item.geo_focus}</TableCell>
                <TableCell align="right">{item.team.length > 25 ? (`${item.team.substring(0, 24)}...`) : (item.team)}</TableCell>
                <TableCell align="right">{item.next_steps.length > 25 ? (`${item.next_steps.substring(0, 24)}...`) : (item.next_steps)}</TableCell>
                <TableCell align="right">{item.views}</TableCell>
                <TableCell align="right">{likesCount(item.reactions)}</TableCell>
                <TableCell align="right">{dislikesCount(item.reactions)}</TableCell>
                <TableCell align="right">
                  {avgLikes(item.reactions, item.views)}
                  %
                </TableCell>
                <TableCell align="right">
                  {avgDislikes(item.reactions, item.views)}
                  %
                </TableCell>
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
